import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ButtonLoaderComponent } from './pages/button-loader/button-loader.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FooterModule} from "./components/footer/footer.module";
import { LogoComponent } from './components/logo/logo.component';
import {HomeModule} from "./pages/home/home.module";
import {Navbar2Module} from "./components/navbar2/navbar2.module";
import {CalculatorModule} from "./components/calculator/calculator.module";
import {CalcModule} from "./pages/calc/calc.module";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    //ButtonLoaderComponent,
    AppBarComponent,
    //NavbarComponent,
    LogoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HomeModule,
    Navbar2Module,
  ], exports: [AppRoutingModule, SpinnerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
