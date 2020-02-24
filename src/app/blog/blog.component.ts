import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPosts: Post[];

  constructor(private postService: PostService) { }



  async ngOnInit() {
    // Recuperar los posts a través del servicio
    this.listaPosts = await this.postService.getAllPostsPromise();
  }


  async filtrarCategoria($event) {
    if ($event.target.value == 'mostrarTodo') {
      this.listaPosts = await this.postService.getAllPostsPromise();
    } else {
      this.postService.getPostByCategoria($event.target.value)
        .then(arrFiltrado => {
          this.listaPosts = arrFiltrado;
        });
    }

    /*
    this.postService.getPostByCategoria($event.target.value)
      .then(arrFiltrado => {
        this.listaPosts = arrFiltrado;
      });
      */
  }

  borrarPost(pId) {
    console.log(pId)
    this.postService.deletePost(pId)

  }






}
