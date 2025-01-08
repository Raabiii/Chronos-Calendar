import { Appointment } from "../model/Appointment";

class AppointmentService {
  private appointments: Appointment[] = [];

  public addAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
    this.sortAppointments();
  }

  public getAppointments(): Appointment[] {
    return this.appointments;
  }

  public getSize(): number {
    return this.appointments.length;
  }

  public getAppointmentById(id: string): Appointment | undefined {
    return this.appointments.find((appointment) => appointment.id === id);
  }

  public updateAppointment(id: string, appointment: Appointment): void {
    const index = this.appointments.findIndex(
      (appointment) => appointment.id === id
    );
    if (index !== -1) {
      this.appointments[index] = appointment;
    }
    this.sortAppointments();
  }

  public deleteAppointment(id: string): void {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id
    );
    this.sortAppointments();
  }

  public clearAppointments(): void {
    this.appointments = [];
  }

  private sortAppointments(): void {
    this.appointments.sort(
      (a, b) => a.startDate.getTime() - b.startDate.getTime()
    );
  }
}

const singleton = new AppointmentService();
Object.freeze(singleton);
export default singleton as AppointmentService;
