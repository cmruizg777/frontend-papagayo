import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-papagayo';
  logged = false;
  username : any;
  constructor(
    private auth: AuthService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.auth.userStatus().subscribe(r => {
      this.logged = r;
      this.username = localStorage.getItem('user');
    })
    this.auth.verifyState();

  }

}
