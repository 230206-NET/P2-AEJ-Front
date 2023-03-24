import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BackApiServiceService } from '../back-api-service.service';
import { BuyItemComponent } from './buy-item.component';

describe('BuyItemComponent', () => {
  let component: BuyItemComponent;
  let fixture: ComponentFixture<BuyItemComponent>;
  let service: BackApiServiceService;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyItemComponent ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
    service = TestBed.inject(BackApiServiceService);
    fixture = TestBed.createComponent(BuyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Default values test', () => {
    expect(component.input).toEqual(0);
    expect(component.totalSum).toEqual(0);
  });

  it('should use PutOrder', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, "PutOrder")
    let button = fixture.debugElement.nativeElement.querySelector('button');
    
    button.click();
    expect(component.PutOrder).toHaveBeenCalled();
  }));

  it('should calculate', () => {
    fixture.detectChanges();
    spyOn(component, "Calculate");
    // const event = new KeyboardEvent('keyup', {bubbles: true, cancelable: true, shiftKey:false})
    
    const event = new InputEvent("2");
    const input = parseInt((document.getElementById("selectquantity") as HTMLInputElement).value);    component.Calculate(event);
    expect(input).toBeFalsy();
    
  });

});
