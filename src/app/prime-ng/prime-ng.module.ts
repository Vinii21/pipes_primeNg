import { NgModule } from '@angular/core';
/* import {MenuModule} from 'primeng/menu' */
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule
/*     MenuModule, */
  ]
})
export class PrimeNgModule { }
