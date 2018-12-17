import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumenyconfirmacion',
  templateUrl: './resumenyconfirmacion.component.html',
  styleUrls: ['./resumenyconfirmacion.component.scss']
})
export class ResumenyconfirmacionComponent implements OnInit {
  isLoading: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
  }

  goTo(view: string) {
    this.router.navigate([view], { replaceUrl: true });
  }
}
