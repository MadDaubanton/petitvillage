import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FigurinesService {

  private apiUrl = '/assets/figurines.json'; // Chemin vers votre fichier JSON

  constructor(private http: HttpClient) { }

  getFigurines(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}