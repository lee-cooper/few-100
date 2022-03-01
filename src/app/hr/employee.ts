import { ProvidesCompensationInformation } from './compensation.interface';
import { Person } from './person';

export class Employee
  extends Person
  implements ProvidesCompensationInformation
{
  private _salary: number;

  constructor(startingSalary: number) {
    super();
    this._salary = startingSalary;
  }
  getCompensation() {
    return this._salary;
  }

  get salary() {
    return this._salary;
  }

  giveRaise(amount: number) {
    this._salary += amount;
  }
}
