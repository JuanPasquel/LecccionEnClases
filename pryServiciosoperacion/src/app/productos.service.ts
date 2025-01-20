import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
    //private apiUrl = ' https://drive.google.com/uc?id=1WVL_3mj8zVZmF23KAglSqCG0OdmQ_AXU'; 
    public apiUrl = ' https://drive.google.com/uc?id=1WVL_3mj8zVZmF23KAglSqCG0OdmQ_AXU'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Recuperar el archivo JSON desde Drive
}
}
