import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {CalcComponent} from "./pages/calc/calc.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {ToolsComponent} from "./pages/tools/tools.component";

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:'calculator',component:CalcComponent},
  {path:'tools/calculator',component:CalcComponent},
  {path:'',component:HomeComponent},
  {path:'tools',component:ToolsComponent},
  {path:'**',component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
