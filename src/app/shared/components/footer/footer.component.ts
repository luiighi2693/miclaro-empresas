import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  validateSession() {
    if (this.authenticationService !== undefined ) {
      return this.authenticationService.getCredentials() !== null;
    } else {
      return false;
    }
  }

}
