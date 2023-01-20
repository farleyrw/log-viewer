import { Component } from '@angular/core';
import { LogFilterService } from '../log-filter.service';
import { LogLogicService } from '../log-logic.service';

@Component({
  selector: 'app-log-filter',
  templateUrl: './log-filter.component.html',
  styleUrls: ['./log-filter.component.scss']
})
export class LogFilterComponent {

    private colors = ["blue", "indigo", "purple", "pink", "red", "orange", "yellow", "green", "teal", "cyan"];
    private shuffledColors: string[] = [];

    filterOpen = false;

    constructor(
        private logLogicService: LogLogicService,
        private logFilterService: LogFilterService
    ) {
        this.shuffledColors = this.colors
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    apps = this.logFilterService.apps;

    filterOptions = this.logFilterService.filterOptions;

    logLevels = this.logLogicService.logLevels

    toggleApps = this.logFilterService.toggleApps;

    toggleLogLevels = this.logFilterService.toggleLogLevels;

    filterByApp = this.logFilterService.filterByApp;

    getAlertClass = this.logLogicService.getAlertClass;

    getBadgeColor(index: number): string {
        return this.shuffledColors[index % this.shuffledColors.length];
    }
}
