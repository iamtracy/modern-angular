import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonModule, FormModule, WizardModule } from '@modern/shared/ui';
import { SetupWizardBasicInfoComponent } from './screens/basic-info.component';
import { SetupWizardPreferencesComponent } from './screens/preferences.component';
import { SetupWizardComponent } from './setup-wizard.component';
import { SetupWizardService } from './setup-wizard.service';

@NgModule({
  declarations: [
    SetupWizardComponent,
    SetupWizardBasicInfoComponent,
    SetupWizardPreferencesComponent
  ],
  imports: [
    CommonModule,
    WizardModule,
    FormModule,
    ButtonModule,
    FlexLayoutModule,
  ],
  providers: [SetupWizardService],
  exports: [SetupWizardComponent]
})
export class SetupWizardModule { }
