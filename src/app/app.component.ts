import { Component, OnInit } from '@angular/core';
import { MessagingService } from "./messaging.service";
import { FirebaseAuthService } from './firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message;
  user;

  constructor(private msgService: MessagingService, private _auth: FirebaseAuthService) {}

  ngOnInit() {
    
  }

  loginWithGoogle() {
    this._auth.googleLogin().then(() => {
      this.user = this._auth.currentUser;

      this.msgService.getPermission();
      this.msgService.receiveMessage();
      this.msgService.currentMessage.subscribe(message => this.message = message);
    });
  }
  logout() {
    this._auth.signOut().then(() => {
      this.user = null;
    });
  }
}
