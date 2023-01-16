import { Injectable } from '@angular/core';
import { LogLevel } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogLogicService {

    logLevels = Object.values(LogLevel);

    getAlertClass(level: LogLevel): string {
        const classMap: { [key in LogLevel]: string } = {
            info: 'primary',
            debug: 'info',
            warn: 'warning',
            error: 'danger'
        };

        return classMap[level];
    }

}
