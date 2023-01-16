import { Component } from '@angular/core';
import { LogFilterOptions } from '../../models/log-filter-options';
import { LogFilterService } from '../log-filter.service';
import { LogLogicService } from '../log-logic.service';

@Component({
  selector: 'app-log-filter',
  templateUrl: './log-filter.component.html',
  styleUrls: ['./log-filter.component.scss']
})
export class LogFilterComponent {

    apps = this.logFilterService.apps;

    filterOpen = false;

    filterOptions = this.logFilterService.filterOptions;

    constructor(
        private logLogicService: LogLogicService,
        private logFilterService: LogFilterService
    ) { }

    logLevels = this.logLogicService.logLevels

    toggleApps = this.logFilterService.toggleApps;

    toggleLogLevels = this.logFilterService.toggleLogLevels;
}
