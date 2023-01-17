import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Log, LogLevel } from '../models/log';

@Injectable({
    providedIn: 'root'
})
export class LogService {

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { }

    getLogs(): Observable<Log[]> {
        let logs = [
            { id: 0, severity: LogLevel.Debug, timestamp: new Date('2022-12-25 18:04:23:000'), app: 'API', message: 'Debug Stuff' } as Log,
            { id: 1, severity: LogLevel.Info, timestamp: new Date('2023-01-02 08:04:23:000'), app: 'Web', message: 'Info Stuff' } as Log,
            { id: 2, severity: LogLevel.Warn, timestamp: new Date('2023-01-04 09:24:33:000'), app: 'Web', message: 'Warn Stuff' } as Log,
            { id: 3, severity: LogLevel.Error, timestamp: new Date('2023-01-03 11:06:22:000'), app: 'API', message: 'Error Stuff' } as Log,
            { id: 4, severity: LogLevel.Error, timestamp: new Date('2023-01-13 16:08:07:000'), app: 'Stuff', message: 'Error Stuff' } as Log
        ];

        return of(logs);
    }

}
