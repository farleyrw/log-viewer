import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Log, LogService } from '../log.service';

@Component({
  selector: 'app-log-home',
  templateUrl: './log-home.component.html',
  styleUrls: ['./log-home.component.scss']
})
export class LogHomeComponent implements OnInit, OnDestroy {

  filterOpen = false;

  logLevels = ['info', 'debug', 'warn', 'error'];

  apps = ['Web', 'API'];

  enabledLogLevels: any = {};

  enabledApps: any = {};

  subscriptions = new Subscription();

  propName = 'timestamp';

  logs!: Log[];

  constructor(private logService: LogService) { }
  
  ngOnInit() {
    this.toggleLogLevels(true);
    this.toggleApps(true);

    this.subscriptions.add(this.logService.getLogs().subscribe(logs => this.logs = logs));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getWrapperClass = this.logService.getWrapperClass;

  /*
   * TODO:
   * Filtering options
   * Filter using dynamic tags for apps
   * Make tooltips work - install popper
   */

  filterLogs(): Log[] {
    if (this.logs && this.logs.length) {
      return this.logs
        .filter(log => !!this.enabledLogLevels[log.severity])
        .filter(log => !!this.enabledApps[log.app])
        .sort((first: Log, second: Log) => new Date(second.timestamp).getTime() - new Date(first.timestamp).getTime());
    }

    return [];
  }

  toggleLogLevels(enabled: boolean) {
    this.logLevels.forEach(level => this.enabledLogLevels[level] = enabled);
  }

  toggleApps(enabled: boolean) {
    this.apps.forEach(app => this.enabledApps[app] = enabled);
  }
}
