import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetAUsersItemsComponent } from './get-a-users-items.component';
import { BackApiServiceService } from '../back-api-service.service';
import { createComponent } from '@angular/core';


describe('GetAUsersItemsComponent', () => {
  let component: GetAUsersItemsComponent;
  let fixture: ComponentFixture<GetAUsersItemsComponent>;
  let service: BackApiServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAUsersItemsComponent ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [
        BackApiServiceService
      ]
    })
    .compileComponents();

    service = TestBed.inject(BackApiServiceService);
    fixture = TestBed.createComponent(GetAUsersItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use getAllUserItems', () =>{
    // const spy = spyOn(service, 'getAllUserItems');

    component.ngOnInit()
    expect(component.items).toEqual([])




  })
});
