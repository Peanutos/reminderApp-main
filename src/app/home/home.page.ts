import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../services/my-service.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
  animations: [
    
    trigger('slideUp', [
      
      state('hidden', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      
      transition('hidden => visible', animate('1s ease-out')),
    ])
  ]  //A
})
export class HomePage implements OnInit {

  username: string = 'Username';

  public slideState = 'hidden';

  constructor(private userService: UserService, private storage: Storage) { }

  ngOnInit() {
    this.username = this.userService.getUserName();
    setTimeout(() => {
      this.slideState = 'visible';
    }, 500);
  }



}
