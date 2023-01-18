import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { LogFilterOptions } from '../models/log-filter-options';
import { LogLogicService } from './log-logic.service';

@Injectable({
    providedIn: 'root'
})
export class LogFilterService {

    private firstRun = true;

    filterOptions = new LogFilterOptions();

    apps: string[] = [];

    constructor(private logLogicService: LogLogicService) {
        this.toggleLogLevels(true);
    }

    filterLogs(logs: Log[]): Log[] {
        if (logs && logs.length) {
            this.firstRun && this.detectApps(logs); // TODO: find a better way to do this

            this.firstRun = false;

            return logs
                .filter(log => !!this.filterOptions.levels[log.severity])
                .filter(log => !!this.filterOptions.apps[log.app])
                .sort((first: Log, second: Log) => new Date(second.timestamp).getTime() - new Date(first.timestamp).getTime());
        }

        return [];
    }

    toggleLogLevels(enabled: boolean) {
        this.logLogicService.logLevels.forEach(level => this.filterOptions.levels[level] = enabled);
    }

    toggleApps(enabled: boolean) {
        this.apps.forEach(app => this.filterOptions.apps[app] = enabled);
    }

    filterByApp(app: string) {
        this.toggleApps(false);

        this.filterOptions.apps[app] = true;
    }

    detectApps(logs: Log[]) {
        if (logs && logs.length) {
            logs.forEach(log => {
                if (this.apps.indexOf(log.app) == -1) {
                    this.apps.push(log.app);
                }
            });

            this.toggleApps(true);
        }
    }
}
