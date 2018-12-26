import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent }  from './todolist/todolist.component';
import { NewItemComponent }  from './new-item/new-item.component';
import { NewVendorComponent }  from './new-vendor/new-vendor.component';
import { NewClothingVendorComponent }  from './new-clothingvendor/new-clothingvendor.component';
import { NewClothingRetailComponent }  from './new-clothingretail/new-clothingretail.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanActivateGuard } from './_guards/can-activate.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'items', component: TodolistComponent, canActivate: [ CanActivateGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit-item', component: EditItemComponent, canActivate: [ CanActivateGuard ] },
  { path: 'new-item', component: NewItemComponent, canActivate: [ CanActivateGuard ] },
  { path: 'new-vendor', component: NewVendorComponent, canActivate: [ CanActivateGuard ] },
  { path: 'new-clothingvendor', component: NewClothingVendorComponent, canActivate: [ CanActivateGuard ] },
  { path: 'new-clothingretail', component: NewClothingRetailComponent, canActivate: [ CanActivateGuard ] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
