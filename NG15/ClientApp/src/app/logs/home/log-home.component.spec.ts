import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LogService } from '../log.service';

import { LogHomeComponent } from './log-home.component';

describe('LogHomeComponent', () => {
    let component: LogHomeComponent;
    let fixture: ComponentFixture<LogHomeComponent>;

    let logServiceStub: Partial<LogService> = {
        getLogs: () => of([])
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LogHomeComponent],
            providers: [{ provide: LogService, useValue: logServiceStub }]
        }).compileComponents();

        fixture = TestBed.createComponent(LogHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
