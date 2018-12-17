import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignarpermisos',
  templateUrl: './asignarpermisos.component.html',
  styleUrls: ['./asignarpermisos.component.scss']
})
export class AsignarpermisosComponent implements OnInit {
  isLoading: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
  }

  goTo(view: string) {
    this.router.navigate([view], { replaceUrl: true });
  }
}
