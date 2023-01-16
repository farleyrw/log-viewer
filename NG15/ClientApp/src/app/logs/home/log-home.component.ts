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

    getAlertClass = this.logLogicService.getAlertClass;

    filterLogs(): Log[] {
        return this.logFilterService.filterLogs(this.logs);
    }

    /*
     * TODO:
     * Health checks
     * Build out server layer
     * Add DB - generate test data
     * Filtering options
     * Filter using dynamic tags for apps
     * Add error handling
     * Add loading overlay
     * Make tooltips work - install popper
     * Cypress tests
     */
}
