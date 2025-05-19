import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


@Component({
  selector: 'app-about',
  imports: [NgbModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  cheminEquipe: string = "assets/equipe.jpg";
}
