import { Appointment } from "@/app/model/Appointment";
import AppointmentDao from "./AppointmentDao";
import SocketRequest from "@/app/connection/Socket";

export class AppointmentSocketDao implements AppointmentDao {
  private url: string = "http://localhost:3000";

  connect(username: string, password: string): void {
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        // this.socket.connect(this.url);
        console.log(response.text());
        console.log("Authentication successful");
      } else {
        console.error("Authentication failed");
      }
    });
  }

  insert(item: Appointment): void {
    SocketRequest.getInstance().emit("insert", item);
  }
  update(item: Appointment): void {
    SocketRequest.getInstance().emit("update", item);
  }
  delete(id: string): void {
    SocketRequest.getInstance().emit("delete", id);
  }
  async list(): Promise<Appointment[]> {
    const response = await SocketRequest.getInstance().emitWithResponse(
      "list",
      null
    );
    return response as Appointment[];
  }
}
