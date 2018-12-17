import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuariosypermisos',
  templateUrl: './usuariosypermisos.component.html',
  styleUrls: ['./usuariosypermisos.component.scss']
})
export class UsuariosypermisosComponent implements OnInit {
  isLoading: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
  }

  goTo(view: string) {
    this.router.navigate([view], { replaceUrl: true });
  }
}
