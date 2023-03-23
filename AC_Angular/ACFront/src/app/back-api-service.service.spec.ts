
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BackApiServiceService } from './back-api-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('BackApiServiceService', () => {
  let service: BackApiServiceService;
  let httpMock: HttpTestingController;
  let apiRoot = 'https://apiback.azurewebsites.net/';
  
  //you give the module only the modules it needs from the constuctor of the class. 
  //
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]

    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BackApiServiceService)

  });


  //individual tests
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all items for a user', () =>{
    service.getAllUserItems(1).subscribe((data)=>{
      expect(data).toBeTruthy();
    });
    
    // const req = httpMock.expectOne('http://localhost:5144');
    // expect(req.request.method).toBe('GET')

    // req.flush([
    //   {

    //   }
    // ]);

  });
});
