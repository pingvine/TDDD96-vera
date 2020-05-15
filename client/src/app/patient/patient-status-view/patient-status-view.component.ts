import { Component, OnInit, Inject,Input, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PatientStatusViewDialogComponent} from "../patient-status-view-dialog/patient-status-view-dialog.component";
import {LoginService} from "../services/login.service";
import {ServerService} from "../services/server.service";
import {User} from "../models/User";
import {EventVeraListener} from "../interfaces/event-vera-listener";
import {EventVera} from "../../../../shared/models/EventVera";
import {EventType} from "../../../../shared/models/EventType";
import {EditEventData} from "../../../../shared/models/EditEventData";
import {EventSocketService} from "../services/event-socket.service";
import { EventEmitter } from 'events';

@Component({
  selector: 'app-patient-status-view',
  templateUrl: './patient-status-view.component.html',
  styleUrls: ['./patient-status-view.component.css']
})

export class PatientStatusViewComponent extends EventVeraListener implements OnInit {
  panelOpenState = false;
  activeUsers: string[] = [];
  private localUser: User;

  constructor(public dialog: MatDialog, private loginService: LoginService,
              protected serverService: ServerService, private eventSocketService: EventSocketService) {
    super(eventSocketService);
  }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe((user) => {
      this.localUser = user;
    });

    this.serverService.getEditEvents().subscribe((events) => {
      events.forEach((event) => {
        if (event.eventType === EventType.EditEvent) {
          this.activeUsers.push(event.senderId);
        }
      })
    })
  }
  openDialog(): void {
    // TODO get the patient id for unique field
    this.serverService.createEditEvent('status-pat-e', true, this.localUser.getFirstName()).subscribe(() => {
    });
    const dialogRef = this.dialog.open(PatientStatusViewDialogComponent, {
      width: '85%',
      height: '85%',
      panelClass: 'custom-dialog-container'
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.serverService.createEditEvent('status-pat-e', false, this.localUser.getFirstName()).subscribe(() => {
      })
    });

    this.panelOpenState = true;
    }

  handleCareEvent(event: EventVera): void {
  }

  handleEditEvent(event: EventVera): void {
    const data = event.data as EditEventData;
    // Check if the user wants to edit or stop edit, and add or remove from activeUsers depending on this,
    // avoids duplicates
    if (data.status && !this.activeUsers.includes(event.senderId)) {
      this.activeUsers.push(event.senderId);
    } else if (!data.status && this.activeUsers.includes(event.senderId)) {
      const index = this.activeUsers.indexOf(event.senderId);

      if (index > -1) {
        this.activeUsers.splice(index, 1);
      }
    }
    // Angular does dirty checks on arrays so we must recreate it to trigger ngOnChanges -.-
    const tempArray = [...this.activeUsers];
    this.activeUsers = [];
    this.activeUsers = tempArray;
  }
}
