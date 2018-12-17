import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { extract } from '@app/core';
import { ManejodecuentaComponent } from './manejodecuenta.component';
// import { Shell } from '@app/shell/shell.service';
// import { LoginComponent } from '@app/login/login.component';

const routes: Routes = [
  { path: 'manejodecuenta', component: ManejodecuentaComponent}
];
//
// const routes: Routes = [
//   Shell.childRoutes([
//     // { path: '', redirectTo: '/home', pathMatch: 'full' },
//     { path: 'home', component: HomeComponent, data: { title: extract('Home') } }
//   ])
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ManejodecuentaRoutingModule {}
