import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpenFlag = false;
  path: string;
  collapseAccounManagementFlag: true;
  collapsePaymentsAndInvoices: true;

  constructor(public authenticationService: AuthenticationService,
              private router: Router,
              location: Location) {
    this.path = location.path();
  }

  ngOnInit() {
  }

  validateSession() {
    if (this.authenticationService !== undefined ) {
      return this.authenticationService.getCredentials() !== null;
    } else {
      return false;
    }
  }

  logout() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  goToHome() {
    this.router.navigate(['/home'], { replaceUrl: true });
  }

  goTo(view: string) {
    this.router.navigate([view], { replaceUrl: true });
  }
}
