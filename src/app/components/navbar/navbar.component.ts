import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";
import {MenuInfo} from "../navbar2/menuInfo";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

data = ["home","about","inventory","add item","by NTG team"]

  MenuData:Array<MenuInfo> | undefined



  HandleNavItemClick($event: MouseEvent, myNav: HTMLDivElement) {
    $event.preventDefault()
    if(myNav.className == 'nav')
      myNav.className += " responsive"
    else
      myNav.className = 'nav'


  }

}
