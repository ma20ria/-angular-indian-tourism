import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatesComponent } from "./pages/states/states.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StatesComponent, HomeComponent, ContactsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'newproj';
}
