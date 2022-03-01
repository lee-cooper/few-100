export abstract class Person {
  firstName = '';
  lastName = '';
  get fullName() {
    return `${this.lastName}, ${this.firstName}`;
  }
}
