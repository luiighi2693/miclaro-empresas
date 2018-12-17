import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-de-pagos',
  templateUrl: './historial-de-pagos.component.html',
  styleUrls: ['./historial-de-pagos.component.scss']
})
export class HistorialDePagosComponent implements OnInit {
  isLoading: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
  }
}
