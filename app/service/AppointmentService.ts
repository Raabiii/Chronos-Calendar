import { Appointment } from "../model/Appointment";

export interface AppointmentService {
  insert(item: Appointment): void;
  update(item: Appointment): void;
  delete(id: string): void;
  list(): Appointment[];
}
