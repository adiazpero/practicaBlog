export class Post {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoria: string;
    id: number;

    constructor(pTitulo: string, pTexto: string, pAutor: string, pImagen: string, pCategoria: string, pId: number) {
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = new Date;
        this.categoria = pCategoria;
        this.id = pId;

    }


}