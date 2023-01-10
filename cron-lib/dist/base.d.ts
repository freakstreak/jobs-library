type Config = {
    dbUrl: string;
    dbPort: number;
    password?: string;
};
export declare abstract class Base {
    dbUrl: string;
    dbPort: number;
    dbPassword: string;
    constructor(config: Config);
    protected initializeQueue(queueName: string): any;
}
export {};
