import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CalculatorComponent } from './calculator/calculator.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ExampleImgComponent } from './example-img/example-img.component';
import { ExtraInfoComponent } from './extra-info/extra-info.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, ExampleImgComponent, ExtraInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
