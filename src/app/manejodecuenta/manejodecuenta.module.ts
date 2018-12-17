import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
// import { SharedModule } from '@app/shared';
import { ManejodecuentaRoutingModule } from './manejodecuenta-routing.module';
import { ManejodecuentaComponent } from './manejodecuenta.component';
import { SharedModule } from '@app/shared/shared.module';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [CommonModule, CoreModule, ManejodecuentaRoutingModule, SharedModule],
  declarations: [ManejodecuentaComponent],
})
export class ManejodecuentaModule {}
