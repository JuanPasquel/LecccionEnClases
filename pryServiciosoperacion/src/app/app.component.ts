import { Component , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ProductosService} from './productos.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [CommonModule],  // Asegúrate de que CommonModule esté aquí
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  title = 'pryServiciosoperacion';

  constructor(private dataService: ProductosService) {}

  ngOnInit(): void {
    //this.data = [
      //{ id: 1, title: 'Producto 1', description: 'Descripción del producto 1' },
      //{ id: 2, title: 'Producto 2', description: 'Descripción del producto 2' },
    //];
    this.dataService.getData().subscribe({
      next: (response) => {
        console.log('Datos recuperados:', response); // Verifica los datos en la consola
        this.data = response;
      },
      error: (err) => {
        console.error('Error al recuperar datos:', err);
      },
    });
  }
}

