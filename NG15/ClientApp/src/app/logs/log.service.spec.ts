import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LogService } from './log.service';

describe('LogService', () => {
    let service: LogService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [{ provide: 'BASE_URL', useValue: '' }]
        });
        service = TestBed.inject(LogService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
