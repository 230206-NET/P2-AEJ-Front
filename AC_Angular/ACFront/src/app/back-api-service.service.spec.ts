
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
    service = TestBed.inject(BackApiServiceService);

  });

  let User = {
    id : 2,
    fname : "", 
    lname: "",
    username: "",
    password: "",
    wallet : 1000


  }


  //individual tests
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get a user by id', () =>{
    service.getLogin(User).subscribe(result =>{
      expect(result).toBeTruthy();
      expect(result.valueOf).toBeTruthy(); 
    });
     const req = httpMock.expectOne('http://localhost:5144/login');
     expect(req.request.method).toBe('POST')

     req.flush([
       {
        results : true,
       }
     ]);

  });

  let username = 'ericuser';
  it('should return a username', () =>{
    service.getUserByUsername(username).subscribe((data : any) => {
      expect(data).toBeTruthy();
      expect(data.username).toBe('ericuser');
    })

     const req = httpMock.expectOne('http://localhost:5144/' + `user1?username=${username}`);
     expect(req.request.method).toBe('GET')

     req.flush({
        username : "ericuser"
     });


  });


  
});
