import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { }

  getLogs(): Observable<Log[]> {
    let logs = [
      { id: 0, severity: 'debug', timestamp: new Date('2022-12-25 18:04:23:000'), app: 'API', message: 'Debug Stuff' } as Log,
      { id: 1, severity: 'info', timestamp: new Date('2023-01-02 08:04:23:000'), app: 'Web', message: 'Info Stuff' } as Log,
      { id: 2, severity: 'warn', timestamp: new Date('2023-01-04 09:24:33:000'), app: 'Web', message: 'Warn Stuff' } as Log,
      { id: 3, severity: 'error', timestamp: new Date('2023-01-03 11:06:22:000'), app: 'API', message: 'Error Stuff' } as Log
    ];

    return of(logs);
  }

  getWrapperClass(log: Log): string {
    const classMap = {
      info: 'primary',
      debug: 'info',
      warn: 'warning',
      error: 'danger'
    };

    return (classMap as any)[log.severity];
  }
}

export class Log {
  id!: number;
  severity!: string;
  timestamp!: Date;
  app!: string;
  message!: string;
}
