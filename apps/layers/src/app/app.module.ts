import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ButtonModule, WizzardModule } from '@modern/ui';
import { AppComponent, ModernOneButtonComponent } from './app.component';


@NgModule({
  declarations: [AppComponent, ModernOneButtonComponent],
  imports: [
    BrowserModule,
    WizzardModule,
    ButtonModule,
    FlexModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
