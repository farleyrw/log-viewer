
export class Log {
    id!: number;
    severity!: LogLevel;
    timestamp!: Date;
    app!: string;
    message!: string;
}

export enum LogLevel {
    Info = 'info',
    Debug = 'debug',
    Warn = 'warn',
    Error = 'error'
}