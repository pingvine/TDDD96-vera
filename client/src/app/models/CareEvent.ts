import { ActionType } from './ActionType'
import { Person } from './Person'
import { RoleType } from './RoleType'

export class CareEvent{
    private touched: Date
    private creatorId: number
    private recievers: [RoleType[], number]
    private completed: [Date, number]
    private actionType: ActionType
    private creationTime: Date
    private comment: string

    constructor(creator: Person, recievers: RoleType[], team: number, action: ActionType, comment: string){
        this.touched = new Date
        this.creatorId = creator.getId()
        this.recievers = [recievers, team]
        this.completed = undefined
        this.actionType = action
        this.creationTime = new Date()
        this.comment = comment
    }

    touch(){
        this.touched = new Date()
    }

    getCreatorId(){
        return this.creatorId
    }

    getReceiverId(){
        return this.receiversId
    }

    markAsCompleted(markedBy: number){
        this.completed = [new Date(), markedBy]
    }

    getActionType(){
        return this.actionType
    }

    getCreationTime(){
        return this.creationTime
    }

    getComment(){
        return this.comment
    }

    appendComment(comment: string){
        let lineBreak = '\n'
        this.comment = this.comment.concat(lineBreak)
        this.comment = this.comment.concat(comment.toString())
    }
}