import { Person } from './Person';

export class Team{
    private id: number;
    private members: Person[];

    constructor(id: number, members: Person[]) {
        this.id = id;
        this.members = members;
    }
    getId(){
        return this.id;
    }
    getMembers(){
        return this.members;
    }
}