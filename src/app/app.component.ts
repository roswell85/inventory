import { Component } from '@angular/core';
import {MenuInfo} from "./components/navbar2/menuInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory';
  MenuData : Array<MenuInfo> = [
    {header:'home',href:'home'},
    {header:"tools",href:'tools',children:[
      {header:'calculator',href:'calculator'},
        {header:'invalid',href:'inventory'}
      ]}
    ,{header:"about",href:'about'}

  ]
}
