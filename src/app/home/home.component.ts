import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FigurinesListComponent } from '../figurines-list/figurines-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbModule, FigurinesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cheminLogo: string = "assets/logo.png";
}