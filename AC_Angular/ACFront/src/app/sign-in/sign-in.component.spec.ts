import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SignInComponent } from './sign-in.component';
import { FormGroup, FormControl, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BackApiServiceService } from '../back-api-service.service';
import { Observable } from 'rxjs';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let service: BackApiServiceService;
  let spy: any

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        BackApiServiceService
      ]
    })
    .compileComponents();

    service = TestBed.inject(BackApiServiceService);
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default user with empty values', () => {
    expect(component.newuser).toEqual(
      {
        username :  "",
        password : "",
        fname : "",
        lname : "",
        wallet : 0
      }
    )
  });


    it('should expect username and password to change when calling login()', () => {
      component.login('bobuser', 'passbob');
      
      expect(component.newuser).toEqual(
        {
          username :  "bobuser",
          password : "passbob",
          fname : "",
          lname : "",
          wallet : 0
        }
      )

    });


  });

