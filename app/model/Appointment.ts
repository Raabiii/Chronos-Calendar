export class Appointment {
  private _id: string; // Private to prevent external modifications
  private _title: string;
  private _startDate: Date;
  private _endDate: Date;
  private _allDay: boolean;
  private _repeat: boolean;
  private _description: string;
  private _location: string;
  private _notification: number;

  constructor(
    title: string,
    startDate: Date,
    endDate: Date,
    allDay: boolean,
    repeat: boolean,
    description: string,
    location: string,
    notification: number
  ) {
    this._id = this.generateId(); // Automatically generate the ID
    this._title = title;
    this._startDate = startDate;
    this._endDate = endDate;
    this._allDay = allDay;
    this._repeat = repeat;
    this._description = description;
    this._location = location;
    this._notification = notification;
  }

  // Getter for id
  get id(): string {
    return this._id;
  }

  // Setter for id (private to prevent manual setting)
  set id(value: string) {
    this._id = value;
  }

  // Generate a unique ID (you can use a UUID library for production)
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9); // Simple random ID
  }

  // Getters and setters for the rest of the properties
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get allDay(): boolean {
    return this._allDay;
  }

  set allDay(value: boolean) {
    this._allDay = value;
  }

  get repeat(): boolean {
    return this._repeat;
  }

  set repeat(value: boolean) {
    this._repeat = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get notification(): number {
    return this._notification;
  }

  set notification(value: number) {
    this._notification = value;
  }
}
