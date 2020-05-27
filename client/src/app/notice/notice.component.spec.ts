import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DatePipePipe} from '../date-pipe.pipe';
import {NoticeComponent} from './notice.component';
import {MatDialogModule} from "@angular/material/dialog";

describe('NoticeComponent', () => {
  let component: NoticeComponent;
  let fixture: ComponentFixture<NoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [NoticeComponent, DatePipePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
