import { Person } from './Person';
import { UserType } from './UserType'

export class User extends Person{
    private userType: UserType;

    constructor(id: number, person: Person, userType: UserType) {
        super(id, person.getFirstName(), person.getLastName());
        this.userType = userType
    }

    getFullName() {
        return `${this.getFirstName()} ${this.getLastName()}`;
       }
    getUserType(){
        return this.userType;
    }
}