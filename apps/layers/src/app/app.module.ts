import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ButtonModule, WizardModule } from '@modern/shared/ui';
import { AppComponent } from './app.component';
import { StepWizardComponent } from './pages/step-wizard.component';


@NgModule({
  declarations: [AppComponent, StepWizardComponent],
  imports: [
    BrowserModule,
    WizardModule,
    ButtonModule,
    FlexModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
