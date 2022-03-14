import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Post} from './post'
import { Categoria } from './categoria';
@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor(private httpClient:HttpClient) 
  {
    console.log("servicio jalando");
  }
  getdata()
  {
    
    return this.httpClient.get<Post[]>("http://127.0.0.1:3333/Productos");
  }
  getcategoria()
  {
    return this.httpClient.get<Categoria[]>("http://127.0.0.1:3333/Categorias/"+1);
  }
}
