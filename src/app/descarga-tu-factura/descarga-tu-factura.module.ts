import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
// import { SharedModule } from '@app/shared';
import { DescargaTuFacturaRoutingModule } from './descarga-tu-factura-routing.module';
import { DescargaTuFacturaComponent } from './descarga-tu-factura.component';
import { SharedModule } from '@app/shared/shared.module';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [CommonModule, CoreModule, DescargaTuFacturaRoutingModule, SharedModule],
  declarations: [DescargaTuFacturaComponent],
})
export class DescargaTuFacturaModule {}
