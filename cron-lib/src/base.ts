import Queue from "bull";

type Config = {
  dbUrl: string;
  dbPort: number;
  password?: string;
};

export abstract class Base {
  dbUrl: string;
  dbPort: number;
  dbPassword: string = "";

  constructor(config: Config) {
    this.dbUrl = config.dbUrl;
    this.dbPort = config.dbPort;
    if (config.password) {
      this.dbPassword = config.password;
    }
  }

  protected initializeQueue(queueName: string): any {
    const task = new Queue(queueName, {
      redis: { port: this.dbPort, host: this.dbUrl, password: this.dbPassword },
    });

    return task;
  }
}
