// services/SocketService.ts
import io, { Socket } from "socket.io-client";

class SocketRequest {
  static #instance: SocketRequest;
  private socket: typeof Socket | null = null;

  private constructor() {}

  static getInstance(): SocketRequest {
    if (!SocketRequest.#instance) {
      SocketRequest.#instance = new SocketRequest();
    }
    return SocketRequest.#instance;
  }

  connect(
    url: string,
    email: string,
    token: string,
    connected: () => void
  ): void {
    this.socket = io(url, {
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: `Bearer ${token}`,
            email: email,
          },
        },
      },
    });

    this.socket.on("connect", () => {
      console.log("Socket connected");
      connected();
    });

    this.socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    this.socket.on("connect_error", (err: any) => {
      console.error("Connection error:", err);
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      console.log("Socket disconnected");
    }
  }

  async emitWithResponse<T, R>(event: string, data: T): Promise<R> {
    if (this.socket) {
      return new Promise<R>((resolve, reject) => {
        this.socket?.emit(event, data, (response: R) => {
          if (response) {
            resolve(response);
          } else {
            reject(new Error("No response from server"));
          }
        });
      });
    } else {
      throw new Error("Socket is not connected");
    }
  }

  emit<T>(event: string, data: T): void {
    console.log("socket: " + this.socket);
    if (this.socket) {
      console.log("Emitting event:", event, data);
      this.socket.emit(event, data, (response: any) => {
        console.log("Server response:", response);
        return response;
      });
    } else {
      console.error("Socket is not connected");
    }
  }

  on<T>(event: string, callback: (data: T) => void): void {
    if (this.socket) {
      this.socket.on(event, callback);
    } else {
      console.error("Socket is not connected");
    }
  }

  off(event: string): void {
    if (this.socket) {
      this.socket.off(event);
    } else {
      console.error("Socket is not connected");
    }
  }
}

export default SocketRequest;
