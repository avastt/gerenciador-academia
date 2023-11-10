import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainScreenComponent,
    AppFooterComponent,
    AdicionarComponent
  ],
  imports: [
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
