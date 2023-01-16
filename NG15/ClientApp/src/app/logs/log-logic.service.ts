import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogLogicService {

    logLevels = ['info', 'debug', 'warn', 'error']; // TODO: move to type

    constructor() { }

    getWrapperClass(level: string): string {
        const classMap = {
            info: 'primary',
            debug: 'info',
            warn: 'warning',
            error: 'danger'
        };

        return (classMap as any)[level];
    }

}
