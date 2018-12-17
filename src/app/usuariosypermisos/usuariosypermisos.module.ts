import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
// import { SharedModule } from '@app/shared';
import { UsuariosypermisosRoutingModule } from './usuariosypermisos-routing.module';
import { UsuariosypermisosComponent } from './usuariosypermisos.component';
import { SharedModule } from '@app/shared/shared.module';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [CommonModule, CoreModule, UsuariosypermisosRoutingModule, SharedModule],
  declarations: [UsuariosypermisosComponent],
})
export class UsuariosypermisosModule {}
