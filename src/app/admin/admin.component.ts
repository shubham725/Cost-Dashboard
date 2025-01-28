import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SideManuComponent } from "./side-manu/side-manu.component";

@Component({
  selector: 'app-admin',
  imports: [HeaderComponent, SideManuComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
