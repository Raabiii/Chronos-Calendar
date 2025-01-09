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
    const index = this.appointments.findIndex(
      (appointment) => appointment.id === id
    );
    if (index !== -1) {
      this.appointments.splice(index, 1);
    }
    this.sortAppointments();
  }

  public clearAppointments(): void {
    this.appointments = [];
  }

  public getAppointmentsForDate(date: Date): Appointment[] {
    const appointmentsForDate: Appointment[] = [];
    this.appointments.forEach((appointment) => {
      if (
        appointment.startDate.getDate() === date.getDate() &&
        appointment.startDate.getMonth() === date.getMonth() &&
        appointment.startDate.getFullYear() === date.getFullYear()
      ) {
        appointmentsForDate.push(appointment);
      }
    });
    return appointmentsForDate;
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
