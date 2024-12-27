import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { StatesComponent } from './pages/states/states.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleStateComponent } from './pages/single-state/single-state.component';

export const routes: Routes = [

{
    path:'',component:HomeComponent
},
{
    path:'States',component:StatesComponent
},
{
    path:'Contacts',component:ContactsComponent
},
{
    path:'States/:id',component:SingleStateComponent
},
{
    path:'**',component:NotfoundComponent
},
];