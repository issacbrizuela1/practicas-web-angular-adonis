import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { Post } from '../post';
import { Servicio1Service } from '../servicio1.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  posts: Post[]=[];
  cat:Categoria[]=[];
  constructor(private producto:Servicio1Service,private categoria:Servicio1Service) {
    this.producto.getdata().subscribe(data=>{this.posts=data;});
    let x=this.posts;
    let s:any;
    x.forEach(element => {
      s=element.genero;
    });
    console.log(this.cat);
    this.categoria.getcategoria().subscribe(data=>{this.cat=data;});
   }

  ngOnInit(): void {
  }

}
