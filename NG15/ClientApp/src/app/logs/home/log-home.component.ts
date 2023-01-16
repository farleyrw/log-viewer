import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Log } from '../../models/log';
import { LogFilterService } from '../log-filter.service';
import { LogLogicService } from '../log-logic.service';
import { LogService } from '../log.service';

@Component({
    selector: 'app-log-home',
    templateUrl: './log-home.component.html',
    styleUrls: ['./log-home.component.scss']
})
export class LogHomeComponent implements OnInit, OnDestroy {

    subscriptions = new Subscription();

    logs!: Log[];

    constructor(
        private logService: LogService,
        private logLogicService: LogLogicService,
        private logFilterService: LogFilterService
    ) { }

    ngOnInit() {
        this.subscriptions.add(this.logService.getLogs().subscribe(logs => this.logs = logs));
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    getWrapperClass = this.logLogicService.getWrapperClass;

    filterLogs() {
        return this.logFilterService.filterLogs(this.logs, this.logFilterService.filterOptions);
    }

    /*
     * TODO:
     * Refactor UI
     * Health checks
     * Build out server layer
     * Add DB - generate test data
     * Filtering options
     * Filter using dynamic tags for apps
     * Make tooltips work - install popper
     */
}
