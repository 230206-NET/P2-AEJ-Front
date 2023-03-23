import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAUsersItemsComponent } from './get-a-users-items/get-a-users-items.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserHomeComponent } from './user-home/user-home.component';
import {GetMarketplaceItemsComponent} from './get-marketplace-items/get-marketplace-items.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BuyItemComponent } from './buy-item/buy-item.component';
import { AllItemsComponent } from './all-items/all-items.component';

const routes: Routes = [

{path: 'users-items/{id}',
 component : GetAUsersItemsComponent 
},

{path : '',component : SignInComponent},
{path: 'user-home/', component : UserHomeComponent},
{path: 'home-page',  component : HomePageComponent},
{path: 'sign-in',  component : SignInComponent},
{path : 'user-items', component : GetAUsersItemsComponent},
{path: 'sign-up', component : SignUpComponent},
{path: 'marketplace', component: GetMarketplaceItemsComponent },
{path: 'user-profile/:id', component: UserProfileComponent },
{path: 'allitems', component : AllItemsComponent},
{path: 'marketplace/:id', component: BuyItemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignInComponent,GetAUsersItemsComponent,UserProfileComponent]
