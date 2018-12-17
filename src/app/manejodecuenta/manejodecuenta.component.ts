import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manejodecuenta',
  templateUrl: './manejodecuenta.component.html',
  styleUrls: ['./manejodecuenta.component.scss']
})
export class ManejodecuentaComponent implements OnInit {
  isLoading: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
  }
}
