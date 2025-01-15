class HttpRequest {
  static instance: HttpRequest;

  private constructor() {}

  static getInstance(): HttpRequest {
    if (!HttpRequest.instance) {
      HttpRequest.instance = new HttpRequest();
    }
    return HttpRequest.instance;
  }

  public async authenticate(
    url: string,
    username: string,
    password: string
  ): Promise<string> {
    try {
      const response = await fetch(url + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Authentication successful");
        return data.access_token;
      } else {
        console.error("Authentication failed");
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      throw error;
    }
  }
}

export default HttpRequest;
