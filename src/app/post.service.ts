import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: Post[];
  id: number;

  constructor() {

    this.arrPost = [
      new Post('6 Trucos para mejorar tu composición fotográfica', 'Componer es sin duda una de las tareas con las que todo fotógrafo debe de lidiar para conseguir buenas fotografías. Sabemos que aprender las reglas básicas de composición es algo imprescindible por lo que todo buen fotógrafo debe de pasar. Pero además de las reglas básicas hay trucos que nos van a ayudar mucho en la práctica.', 'Mario Perez', '../assets/images/fotografia.jpg', 'tecnicas', 0),
      new Post('Mochila f-stop para fotógrafos. modelo Ajna', 'Atención fotógrafos: Esta mochila no es para ir vestidos de guapos y pasear por la ciudad con un cuerpo y un objetivo. Esta mochila, si se le quiere sacar partido, es para llevar material, almacenar y patear.', 'Pilar Jerico', '../assets/images/fotografia1.png', 'viaje', 1),
      new Post('Fotografiando Islandia(Octubre 2018)', 'Durante una semana he recorrido el oeste y sur de Islandia con la intención de fotografiar las localizaciones más emblemáticas.La agencia de viajes Tierras Polares se ha encargado de reservar los alojamientos (guesthouse y albergues) que más se han adaptado a mi ruta. También se han encargado de facilitarme un coche de alquiler, de esta manera he podido explorar Islandia a mi ritmo. La comodidad de esta modalidad de viaje ha sido absoluta.', 'Pedro Zuazua', '../assets/images/fotografia3.jpg', 'viaje', 2),
      new Post('FOTOCLASS el curso de Fotografía online con tutor', 'Fotoclass es un curso online de fotografía para todos aquellos que queráis dominar vuestra cámara. Un curso con tutor, lo que significa que os ofrecemos un seguimiento y una orientación constante. El curso tiene una duración de 5 semanas.', 'Raul Ruiz', '../assets/images/fotografia2.jpg', 'tecnica', 3),
      new Post('No puedes tenerlo todo', 'El blog Alterconsumismo cumple 6 años proponiendo un consumo alternativo y responsable', 'Anna Argemi', 'https://ep01.epimg.net/elpais/imagenes/2019/05/14/alterconsumismo/1557819204_012934_1557821195_miniatura_normal.jpg', 'actualidad', 4),
      new Post('Viajeros incansables (que paran esta semana en Madrid)', 'Hoy martes y el próximo 2 de marzo se celebran las Jornadas IATI de los Grandes Viajes, donde 24 aventureros relatan sus experiencias por el mundo', 'Isidoro Merino', 'https://ep01.epimg.net/elviajero/imagenes/2019/02/26/actualidad/1551185964_919099_1551186109_miniatura_normal.jpg', 'viaje', 5),
      new Post('Los 20 blogs de viajes en español más influyentes para 2019', 'Una lista con las mejores bitácoras viajeras hechas en España en función de su importancia en el buscador de Google. Todas, con grandes cantidades de información útil y miles de fieles seguidores', 'Paco Nadal', 'https://ep01.epimg.net/elpais/imagenes/2019/01/15/paco_nadal/1547561681_313148_1547564185_miniatura_normal.jpg', 'viaje', 6),

    ]
    this.id = 7;

  }



  getAll(): Post[] {
    return this.arrPost;
  }


  agregarPost(newPost: Post) {
    newPost.id = this.id;
    this.arrPost.push(newPost);
    this.id++
  }



  getAllPostsPromise(): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPost);
    });
    return prom;
  }




  getPostByCategoria(pCategoria: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const arrFiltrado = this.arrPost.filter(post => post.categoria === pCategoria);
      resolve(arrFiltrado);
    });
    return prom
  }




  deletePost(pId: number) {
    for (let i = 0; i < this.arrPost.length; i++) {
      if (pId === this.arrPost[i].id) {
        this.arrPost.splice(i, 1)
      }
    }


  }








}
