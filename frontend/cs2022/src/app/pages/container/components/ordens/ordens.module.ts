import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdensComponent } from './ordens.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    OrdensComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" },

  ]
})
export class OrdensModule { }
