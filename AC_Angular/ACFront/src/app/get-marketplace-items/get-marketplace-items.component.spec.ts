import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetMarketplaceItemsComponent } from './get-marketplace-items.component';

describe('GetMarketplaceItemsComponent', () => {
  let component: GetMarketplaceItemsComponent;
  let fixture: ComponentFixture<GetMarketplaceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      declarations: [ GetMarketplaceItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMarketplaceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
