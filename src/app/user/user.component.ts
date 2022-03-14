import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() inuser: any;
nombre:string="prueba";
years: number;
direccion:{
  calle:string;
  ciudad:string;
};
hobbies:string[];
constructor() {
  this.years=28;
  this.direccion={
    calle:"calle1",
    ciudad:"ciudad1"
  }
  this.hobbies=["anime","videos"];
  }
sayhello()
{
  alert("hola");
}
  ngOnInit(): void {
  }

}
