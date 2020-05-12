import { ActionType } from './ActionType';
import { Person } from './Person';
import { RoleType } from './RoleType';

interface Receivers {
  roleTypes: RoleType[];
  team: number;
}

export class CareEvent {
    private touched: Date

    private creatorId: number

    private receivers: Receivers

    private completed: [Date, string]

    private actionType: ActionType

    private creationTime: Date

    private comment: string

    private patient: Person;

    constructor(creator: Person, receivers: RoleType[], team: number, action: ActionType, comment: string, patient?: Person) {
      this.touched = new Date();
      this.creatorId = creator.getId();
      this.receivers = { roleTypes: receivers, team };
      this.completed = undefined;
      this.actionType = action;
      this.creationTime = new Date();
      this.comment = comment;
      this.patient = patient;
    }

    setPatient(person: Person) {
      this.patient = person;
    }

    getPatient(): Person {
      return this.patient;
    }

    touch() {
      this.touched = new Date();
    }

    getCreatorId() {
      return this.creatorId;
    }

    getReceiverId() {
      return this.receivers;
    }

    markAsCompleted(markedBy: string) {
      this.completed = [new Date(), markedBy];
    }

    getActionType() {
      return this.actionType;
    }

    getCreationTime() {
      return this.creationTime;
    }

    getComment() {
      return this.comment;
    }

    appendComment(comment: string) {
      const lineBreak = '\n';
      this.comment = this.comment.concat(lineBreak);
      this.comment = this.comment.concat(comment.toString());
    }
}
