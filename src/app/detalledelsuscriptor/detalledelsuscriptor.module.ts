import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
// import { SharedModule } from '@app/shared';
import { DetalledelsuscriptorRoutingModule } from './detalledelsuscriptor-routing.module';
import { DetalledelsuscriptorComponent } from './detalledelsuscriptor.component';
import { SharedModule } from '@app/shared/shared.module';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [CommonModule, CoreModule, DetalledelsuscriptorRoutingModule, SharedModule],
  declarations: [DetalledelsuscriptorComponent],
})
export class DetalledelsuscriptorModule {}
