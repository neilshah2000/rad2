import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClaimComponent } from './claim.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './../api.service';
import { ApiServiceMock } from './../api.service.mock';

describe('ClaimComponent', () => {
    let component: ClaimComponent;
    let fixture: ComponentFixture<ClaimComponent>;
    let getData;
    let apiServiceMock = new ApiServiceMock();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ClaimComponent ],
            imports: [ HttpClientTestingModule, RouterTestingModule ],
            providers: [
                { provide: ApiService, useValue: apiServiceMock }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClaimComponent);
        component = fixture.componentInstance;
        getData = spyOn(component, 'getData');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should format countdown correctly', () => {
        const formatted = component.formatCountDown(61)
        expect(formatted).toBe('01:01');
    });

    it('should get data', () => {
        expect(getData).toHaveBeenCalled();
    });

    it('should call success on click', () => {
        const apiService = TestBed.get(ApiService);
        const getSuccess = spyOn(apiService, 'getSuccess').and.callThrough();
        expect(getSuccess).not.toHaveBeenCalled();
        component.onSuccessClicked();
        fixture.detectChanges()
        expect(getSuccess).toHaveBeenCalled();
    });
});
