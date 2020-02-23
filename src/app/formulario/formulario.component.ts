import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../post.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //crear un objeto que represente al formulario
  formulario: FormGroup;
  postEnviado: boolean;

  id: number;

  constructor(private postService: PostService) {
    this.postEnviado = false;
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
      ]),
      texto: new FormControl('', [
        Validators.required,
      ]),
      autor: new FormControl('', [
        Validators.required,
      ]),
      imagen: new FormControl('', [
        Validators.required,
      ]),
      fecha: new FormControl('', [
        Validators.required,
      ]),
      categoria: new FormControl('', [
        Validators.required,
      ])

    })

  }


  ngOnInit(): void {

  }


  onSubmit() {
    console.log(this.formulario.value);
    const post: Post = new Post(
      this.formulario.value.titulo,
      this.formulario.value.texto,
      this.formulario.value.autor,
      this.formulario.value.imagen,
      this.formulario.value.categoria,
      this.formulario.value.id
    );
    this.postService.agregarPost(post);

  }



}
