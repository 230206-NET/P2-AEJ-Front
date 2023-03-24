import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ACAPIServiceService } from './acapiservice.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AllItemsComponent } from './all-items/all-items.component';

describe('ACAPIServiceService', () => {
  let service: ACAPIServiceService;
  let httpMock: HttpTestingController;
  let apiRoot = 'https://acnhapi.com/v1a/houseware/';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllItemsComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
  
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ACAPIServiceService);
  });


  it('should return information', () =>{
    service.AllItems().subscribe((data : any) => {
      expect(data).toBeTruthy();
    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});