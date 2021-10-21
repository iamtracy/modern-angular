import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule } from '@angular/router'
import { ButtonModule } from '../button/button.module'
import { StepperModule } from '../stepper/stepper.module'
import { WizardComponent } from './wizard.component'
import { WizardService } from './wizard.service'

@NgModule({
  declarations: [WizardComponent],
	imports: [
    CommonModule,
    StepperModule,
    ButtonModule,
    FlexLayoutModule,
    RouterModule.forChild([]),
  ],
  providers: [WizardService],
	exports: [WizardComponent],
})
export class WizardModule {}
