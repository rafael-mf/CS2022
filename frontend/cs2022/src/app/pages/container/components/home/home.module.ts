import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ResumoOrdensComponent } from './components/resumo-ordens/resumo-ordens.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    HomeComponent,
    ResumoOrdensComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" },

  ]
})
export class HomeModule { }
