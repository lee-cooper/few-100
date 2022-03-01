import { ProvidesCompensationInformation } from './compensation.interface';
import { Person } from './person';

export class Retiree extends Person implements ProvidesCompensationInformation {
  private _pension: number = 0;

  constructor(pension: number) {
    super();
    this._pension = pension;
  }
  getCompensation() {
    return this.pension;
  }

  get pension() {
    return this._pension;
  }
}
