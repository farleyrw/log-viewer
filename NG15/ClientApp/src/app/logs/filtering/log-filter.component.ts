import { Component } from '@angular/core';
import { LogFilterService } from '../log-filter.service';
import { LogLogicService } from '../log-logic.service';

@Component({
  selector: 'app-log-filter',
  templateUrl: './log-filter.component.html',
  styleUrls: ['./log-filter.component.scss']
})
export class LogFilterComponent {

    filterOpen = false;

    constructor(
        private logLogicService: LogLogicService,
        private logFilterService: LogFilterService
    ) { }

    apps = this.logFilterService.apps;

    filterOptions = this.logFilterService.filterOptions;

    logLevels = this.logLogicService.logLevels

    toggleApps = this.logFilterService.toggleApps;

    toggleLogLevels = this.logFilterService.toggleLogLevels;
}
