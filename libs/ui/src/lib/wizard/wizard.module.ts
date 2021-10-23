import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { Route, RouterModule } from '@angular/router'
import { ButtonModule, StepperModule } from '@modern/ui'
import { MenuItem } from "primeng/api"
import { WizardComponent } from './wizard.component'
import { WizardService } from './wizard.service'


export interface WizardStep extends
  Pick<Route, 'component'>,
  Pick<MenuItem, 'label'>
{
  path: string
}

export interface StepWizard {
  currentStepIndex: number,
  inititalStepIndex?: number,
  isFirstStep: boolean,
  isLastStep: boolean,
  wizardSteps: WizardStep[],
}

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
