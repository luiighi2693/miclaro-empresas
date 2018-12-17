import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalledelsuscriptor',
  templateUrl: './detalledelsuscriptor.component.html',
  styleUrls: ['./detalledelsuscriptor.component.scss']
})
export class DetalledelsuscriptorComponent implements OnInit {
  isLoading: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
  }
}
