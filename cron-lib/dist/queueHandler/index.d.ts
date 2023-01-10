import { Queue } from "bull";
import { Base } from "../base";
export declare class QueueHandler extends Base {
    createQueue(queueName: string): any;
    addTaskToQueue(queue: Queue, data: any, task: Function, options?: any): any;
}
