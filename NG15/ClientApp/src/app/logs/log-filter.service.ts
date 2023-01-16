import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { LogFilterOptions } from '../models/log-filter-options';
import { LogLogicService } from './log-logic.service';

@Injectable({
    providedIn: 'root'
})
export class LogFilterService {

    filterOptions = new LogFilterOptions();

    apps = ['Web', 'API']; // TODO: Generate list, must be observable

    constructor(private logLogicService: LogLogicService) {
        this.toggleLogLevels(true);
        this.toggleApps(true);
    }

    filterLogs(logs: Log[], filterOptions: LogFilterOptions): Log[] {
        if (logs && logs.length) {
            return logs
                .filter(log => !!filterOptions.levels[log.severity])
                .filter(log => !!filterOptions.apps[log.app])
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
}
