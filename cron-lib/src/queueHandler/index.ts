import { Queue } from "bull";
import { Base } from "../base";
import bull from "bull";

export class QueueHandler extends Base {
  createQueue(queueName: string): any {
    const task = new bull(queueName, {
      redis: { port: this.dbPort, host: this.dbUrl, password: this.dbPassword },
    });
    return task;
  }

  addTaskToQueue(queue: Queue, data: any, task: Function, options?: any): any {
    queue.add(data, options);

    queue.process(async (job) => {
      try {
        return await task(job.data);
      } catch (err: any) {
        return Promise.reject(new Error("Some error happened"));
      }
    });
    console.log("task done");
  }
}
