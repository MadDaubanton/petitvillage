import { Component, OnInit } from '@angular/core';
import { FigurinesService } from '../figurines.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-figurines-list',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './figurines-list.component.html',
    styleUrl: './figurines-list.component.css',
})
export class FigurinesListComponent implements OnInit {
    /** Liste de toutes les figurines récupérées. */
    figurines: any[] = [];
    /** Liste des figurines filtrées et triées à afficher. */
    filteredFigurines: any[] = [];
    /** Type de tri selectionné. */
    selectedSort: string = "Prix décroissant";
    /** Terme de recherche pour filtrer les figurines par nom. */
    searchTerm: string = "";
    /** Etat du dropdown. */
    isDropdownOpen: boolean = false;

    /**
     * Constructeur de FigurinesListComponent.
     * @param figurinesService Service pour récupérer les figurines.
     */
    constructor(private figurinesService: FigurinesService) {
    }

    /** Initialisation du composant. Récupère les figurines et applique les filtres et le tri. */
    ngOnInit(): void {
        this.figurinesService.getFigurines().subscribe(data => {
            this.figurines = data;
            this.applyFiltersAndSort();
        });
    }
    /**
     * Modifie le type de tri et applique les filtres et le tri.
     * @param order Le nouveau type de tri.
     */
    onSortChange(order: string) {
        this.selectedSort = order;
        this.applyFiltersAndSort();
    }
    /** Applique les filtres et le tri aux figurines. */
    applyFiltersAndSort(): void {
        /** Filtre les figurines en fonction du terme de recherche. */
        this.filteredFigurines = this.figurines.filter(figurine =>
            figurine.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
        );

        const sortOrder = this.selectedSort === "Prix croissant" ? "asc_prix" :
            this.selectedSort === "Prix décroissant" ? "desc_prix" :
                this.selectedSort === "Nom croissant" ? "asc_nom" : "desc_nom";

        this.filteredFigurines.sort((a:any, b:any) => {
            const isAsc = sortOrder.startsWith('asc');
            const isPrice = sortOrder.endsWith('prix');

            const valueA = isPrice ? a.prix : a.nom.toLowerCase();
            const valueB = isPrice ? b.prix : b.nom.toLowerCase();
            if (valueA < valueB) return isAsc ? -1 : 1;
            if (valueA > valueB) return isAsc ? 1 : -1;
            return 0;
        });
    }
}
