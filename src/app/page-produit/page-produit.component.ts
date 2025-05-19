import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FigurinesService } from '../figurines.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-produit.component.html',
  styleUrl: './page-produit.component.css'
})
export class PageProduitComponent implements OnInit {
  figurine: any;

  /**
   * @param route 
   * @param figurinesService 
   * @description Injecte ActivatedRoute et FigurinesService
   */
  constructor(private route: ActivatedRoute, private figurinesService: FigurinesService) { }

  /**
   * @description Recupere l'id de l'url et recuperer la bonne figurine via le service
   */
  ngOnInit(): void {
    // Récupère l'id de l'url
    this.route.params.subscribe(params => {
      const figurineId = params['id'];
      // Recupere la bonne figurine via le service
      this.figurinesService.getFigurines().subscribe(data => {
        this.figurine = data.find((figurine: any) => figurine.id == figurineId);
      });

    });
  }
}
