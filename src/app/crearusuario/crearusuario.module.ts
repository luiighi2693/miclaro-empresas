import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
// import { SharedModule } from '@app/shared';
import { CrearusuarioRoutingModule } from './crearusuario-routing.module';
import { CrearusuarioComponent } from './crearusuario.component';
import { SharedModule } from '@app/shared/shared.module';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [CommonModule, CoreModule, CrearusuarioRoutingModule, SharedModule],
  declarations: [CrearusuarioComponent],
})
export class CrearusuarioModule {}
