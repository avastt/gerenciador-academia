import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMainScreenComponent } from './app-main-screen/app-main-screen.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AdicionarComponent } from 'src/app/adicionar/adicionar.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AddComponent } from './add/add.component';
import { ListarComponent } from './listar/listar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { DeletarComponent } from './deletar/deletar.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainScreenComponent,
    AppFooterComponent,
    AdicionarComponent,
    ListarComponent,
    AddComponent,
    AlterarComponent,
    DeletarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
