import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
// import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
// import { ShellModule } from './shell/shell.module';
// import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ManejodecuentaRoutingModule } from '@app/manejodecuenta/manejodecuenta-routing.module';
import { UsuariosypermisosModule } from '@app/usuariosypermisos/usuariosypermisos.module';
import { CrearusuarioModule } from '@app/crearusuario/crearusuario.module';
import { AsignarpermisosModule } from '@app/asignarpermisos/asignarpermisos.module';
import { ResumenyconfirmacionModule } from '@app/resumenyconfirmacion/resumenyconfirmacion.module';
import { DetalledelsuscriptorModule } from '@app/detalledelsuscriptor/detalledelsuscriptor.module';
import { HistorialDePagosModule } from '@app/historial-de-pagos/historial-de-pagos.module';
import { DescargaTuFacturaModule } from '@app/descarga-tu-factura/descarga-tu-factura.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    // TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    // SharedModule,
    // ShellModule,
    HomeModule,
    ManejodecuentaRoutingModule,
    UsuariosypermisosModule,
    CrearusuarioModule,
    AsignarpermisosModule,
    ResumenyconfirmacionModule,
    DetalledelsuscriptorModule,
    HistorialDePagosModule,
    DescargaTuFacturaModule,
    // AboutModule,
    LoginModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
