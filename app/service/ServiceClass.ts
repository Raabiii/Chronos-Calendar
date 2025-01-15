import AppointmentDao from "../dao/appointments/AppointmentDao";
import { AppointmentSocketDao } from "../dao/appointments/AppointmentSocketDao";
import { CRUDDao } from "../dao/CRUDDao";
import { Appointment } from "../model/Appointment";
import { Service } from "./Service";

class AppointmentService implements Service {
  private appointments: Appointment[] = [];
  private appointmentDao: CRUDDao<Appointment>;

  constructor() {
    this.appointmentDao = new AppointmentSocketDao();
    this.appointmentDao.list().then((appointments) => {
      this.appointments = appointments;
      this.sortAppointments();
    });
  }
  insert(item: Appointment): void {
    this.appointmentDao.insert(item);
    this.appointments.push(item);
    this.sortAppointments();
  }

  update(item: Appointment): void {
    this.appointmentDao.update(item);
    const index = this.appointments.findIndex(
      (appointment) => appointment.id === item.id
    );
    if (index !== -1) {
      this.appointments[index] = item;
    }

    this.sortAppointments();
  }
  delete(id: string): void {
    this.appointmentDao.delete(id);
    const index = this.appointments.findIndex(
      (appointment) => appointment.id === id
    );
    if (index !== -1) {
      this.appointments.splice(index, 1);
    }
    this.sortAppointments();
  }
  list(): Appointment[] {
    return this.appointments;
  }

  public getSize(): number {
    return this.appointments.length;
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

export default AppointmentService;
