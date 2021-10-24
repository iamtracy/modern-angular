import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonModule, WizardModule } from '@modern/shared/ui';
import { SetupWizardComponent } from './setup-wizard.component';

@NgModule({
  declarations: [SetupWizardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    WizardModule,
    FlexLayoutModule
  ],
  exports: [SetupWizardComponent]
})
export class SetupWizardModule { }
