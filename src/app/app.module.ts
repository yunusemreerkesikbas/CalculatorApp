import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgOptimizedImage } from '@angular/common';
import { ToggleThemeComponent } from '@components/toggle-theme/toggle-theme.component';
import { HistoryComponent } from '@components/history/history.component';
import { CalculatorComponent } from '@components/calculator/calculator.component';
import { DisplayComponent } from '@components/calculator/display/display.component';
import { KeypadComponent } from '@components/calculator/keypad/keypad.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { KeyComponent } from '@components/calculator/keypad/key/key.component';
import { ResultComponent } from '@components/calculator/display/result/result.component';
import { OperationComponent } from '@components/calculator/display/operation/operation.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleThemeComponent,
    HistoryComponent,
    CalculatorComponent,
    DisplayComponent,
    KeypadComponent,
    NavbarComponent,
    KeyComponent,
    ResultComponent,
    OperationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
