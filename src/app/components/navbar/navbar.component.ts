// import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// import { AuthService as Auth} from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    // private a: Auth,
    // @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
  }

  logout() {
    //this.a.logout({returnTo: this.doc.location.origin});
  }

}
