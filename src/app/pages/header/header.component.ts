import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isShowMenu: Boolean = false;
  users: Object;

  constructor() { 
    this.users = {
      name: 'tyoma',
      password: 'qwerty'
    }
  }

  ngOnInit() {
  }

}
