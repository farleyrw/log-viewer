import { LogLevel } from "./log";

export class LogFilterOptions {
    levels: { [key in LogLevel]?: boolean } = {};
    apps: { [key: string]: boolean } = {};
}
