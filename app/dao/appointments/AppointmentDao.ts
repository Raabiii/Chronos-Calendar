import { CRUDDao } from "../CRUDDao";
import { Appointment } from "../../model/Appointment";

export default interface AppointmentDao extends CRUDDao<Appointment> {}
