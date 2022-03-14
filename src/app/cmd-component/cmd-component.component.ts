import { Component, OnInit } from '@angular/core';
import { NEVER } from 'rxjs';
import { Servicio1Service } from '../servicio1.service';
import { HttpClient } from'@angular/common/http'
@Component({
  selector: 'app-cmd-component',
  templateUrl: './cmd-component.component.html',
  styleUrls: ['./cmd-component.component.css']
})
export class CmdComponentComponent implements OnInit {
  nombres:string="j";
  num:number=1;
  prueba="prueba de variable"
  usuarios=["usuario1","usuario2","usuario3"]
  post=[] as any;
  x=[] as any;
  constructor(private ser:Servicio1Service) 
  {
    this.ser.getdata().subscribe(data => {this.post=data;});
  }
  click()
  {
    
  }
  ngOnInit(): void {
  }
  p(us:any)
  {
    for(let i=0;i<this.usuarios.length;i++)
    {
      if (us==this.usuarios[i]) {
        this.usuarios.splice(i,1);
      }
    }
  }
  adduser(s:any)
  {
    this.usuarios.push(s.value);
    s.value="";
    s.focus();
    return false;
  }
}
