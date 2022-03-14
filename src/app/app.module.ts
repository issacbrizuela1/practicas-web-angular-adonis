import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {primercom} from './componente1/primer.componente';
import { CmdComponentComponent } from './cmd-component/cmd-component.component';
import { PracticasComponent } from './practicas/practicas.component';
import { UserComponent } from './user/user.component';

import {FormsModule} from '@angular/forms';
import { Servicio1Service } from'./servicio1.service'
import { HttpClientModule } from'@angular/common/http'
import {RouterModule,Route}from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriaCargaDirective } from './about/directives/categoria-carga.directive'



const routes:Route[]=[
  {path:'',component:AppComponent},
  {path:'about',component:AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    primercom,
    CmdComponentComponent,
    PracticasComponent,
    UserComponent,
    AboutComponent,
    CategoriaCargaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Servicio1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
