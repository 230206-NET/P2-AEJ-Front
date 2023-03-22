import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { GetAUsersItemsComponent } from './get-a-users-items/get-a-users-items.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GetMarketplaceItemsComponent } from './get-marketplace-items/get-marketplace-items.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BuyItemComponent } from './buy-item/buy-item.component';
import { AllItemsComponent } from './all-items/all-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    GetAUsersItemsComponent,
    UserHomeComponent,
    HomePageComponent,
    NavigationBarComponent,
    GetMarketplaceItemsComponent,
    UserProfileComponent,
    BuyItemComponent
    AllItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
