import { Component, Input } from '@angular/core';
import { Inoticia } from '../../interface/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  arrayNoticias: Inoticia[] = [];
  newNoticia: Inoticia = { titulo: '', url: '', noticia: '', fecha: '' };
  alertaCampos: string ="";

  constructor() {}

  ngOnInit() {}
  //Funcion Que captura los datos del formulario si todos han sido rellenados
  guardarNoticia(){
    if (this.newNoticia.titulo !== '' && this.newNoticia.url !== '' && this.newNoticia.noticia !== '' && this.newNoticia.fecha !== '') {
      this.arrayNoticias.push(this.newNoticia);
      console.log(this.arrayNoticias);
      this.newNoticia = { titulo: '', url: '', noticia: '', fecha: '' };
      this.alertaCampos =  "";
    } else { // ejecución alertaCampos.
      this.alertaCampos =  "<span>*Debe rellenar todos los campo</span>";
    }
  }
  //Funcion que devuelve un HTML, con la estructura del post de la noticia.
  publicarNoticia(): string {
    let html = '';
    this.arrayNoticias.forEach((noticia) => {
      html += `<div class="card-noticia">
      <h2 class="noticia-titulo">${noticia.titulo}</h2>
      <span class="noticia-fecha">${noticia.fecha}</span>
      <div class="noticia-imagen">
      <img src="${noticia.url}">
        </div>
      <div class="noticia-noticia">
        <p>${noticia.noticia}</p>
          </div>
    </div>`
    });
    return html;
  }
}
