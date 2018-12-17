import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
// import { SharedModule } from '@app/shared';
import { HistorialDePagosRoutingModule } from './historial-de-pagos-routing.module';
import { HistorialDePagosComponent } from './historial-de-pagos.component';
import { SharedModule } from '@app/shared/shared.module';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [CommonModule, CoreModule, HistorialDePagosRoutingModule, SharedModule],
  declarations: [HistorialDePagosComponent],
})
export class HistorialDePagosModule {}
