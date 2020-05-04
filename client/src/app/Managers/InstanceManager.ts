import { Team } from '../models/Team';
import { Visit } from '../models/Visit';
import { User } from '../models/User';
import { Person } from '../models/Person';
import { UserType } from '../models/UserType';

const dummyId: number = 0 //TODO: Remove and change occurrences when db exists

export class InstanceManager{
    private teams: Team[]
    private visits: Visit[]
    private users: User[]
    private persons: Person[]

    getTeams(){
        return this.teams
    }

    getTeamByID(id: number){
        return this.teams.find(element => element.getId() == id)
    }

    createTeam(persons: Person[]){
        let newTeam = new Team(dummyId, persons)
        this.teams.push(newTeam)
        return newTeam
    }

    getVisits(){
        return this.visits
    }

    getVisitByID(id: number){
        return this.visits.find(element => element.getId() == id)
    }

    createVisit(person: Person){
        let newPerson = new Visit(dummyId, person)
        this.visits.push(newPerson)
        return newPerson
    }

    getPersons(){
        return this.persons
    }

    getPersonByID(id: number){
        return this.persons.find(element => element.getId() == id)
    }
    
    createPerson(id: number, fName: string, lName: string){
        let newPerson =  new Person(id, fName, lName)
        this.persons.push(newPerson)
        return newPerson
    }

    getUsers(){
        return this.users
    }

    getUserByID(id: number){
        return this.users.find(element => element.getId() == id)
    }

    createUser(id: number, person: Person){
        let newUser = new User(id, person, undefined)
        this.users.push(newUser)
        return newUser
    }
}