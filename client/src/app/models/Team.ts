import { Person } from './Person';

export class Team{
    private id: number;
    private prefix: string;
    private members: Person[];

    constructor(id: number, members: Person[]) {
        this.id = id;
        this.members = members;
    }
    getId(){
        return this.id;
    }

    getPrefix(){
        return this.prefix;
    }

    getMembers(){
        return this.members;
    }
}