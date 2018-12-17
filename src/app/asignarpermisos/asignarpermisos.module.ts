import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
// import { SharedModule } from '@app/shared';
import { AsignarpermisosRoutingModule } from './asignarpermisos-routing.module';
import { AsignarpermisosComponent } from './asignarpermisos.component';
import { SharedModule } from '@app/shared/shared.module';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [CommonModule, CoreModule, AsignarpermisosRoutingModule, SharedModule],
  declarations: [AsignarpermisosComponent],
})
export class AsignarpermisosModule {}
