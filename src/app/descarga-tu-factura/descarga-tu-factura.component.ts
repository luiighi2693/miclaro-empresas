import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descarga-tu-factura',
  templateUrl: './descarga-tu-factura.component.html',
  styleUrls: ['./descarga-tu-factura.component.scss']
})
export class DescargaTuFacturaComponent implements OnInit {
  isLoading: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
  }
}
