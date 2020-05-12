import { RoleType } from './RoleType';

export class Person {
    private socialId: number;

    private firstName: string;

    private lastName: string;

    private roleType: RoleType;

    constructor(id: number, fName: string, lName: string) {
      this.socialId = id;
      this.firstName = fName;
      this.lastName = lName;
    }

    getId() {
      return this.socialId;
    }

    getFirstName() {
      return this.firstName;
    }

    getLastName() {
      return this.lastName;
    }

    getRoleType() {
      return this.roleType;
    }

    setFirstName(fName: string) {
      this.firstName = fName;
    }

    setLastName(lName: string) {
      this.lastName = lName;
    }

    setRoleType(roleType: RoleType) {
      this.roleType = roleType;
    }

    setId(socialId: string) {
      this.socialId = socialId;
    }
}
