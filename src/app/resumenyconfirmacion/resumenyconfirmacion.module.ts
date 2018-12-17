import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
// import { SharedModule } from '@app/shared';
import { ResumenyconfirmacionRoutingModule } from './resumenyconfirmacion-routing.module';
import { ResumenyconfirmacionComponent } from './resumenyconfirmacion.component';
import { SharedModule } from '@app/shared/shared.module';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [CommonModule, CoreModule, ResumenyconfirmacionRoutingModule, SharedModule],
  declarations: [ResumenyconfirmacionComponent],
})
export class ResumenyconfirmacionModule {}
