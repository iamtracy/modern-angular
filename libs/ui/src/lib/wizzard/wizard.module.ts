import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule } from '@angular/router'
import { ButtonModule } from '../button/button.module'
import { StepperModule } from '../stepper/stepper.module'
import { WizzardComponent } from './wizzard.component'

@NgModule({
  declarations: [WizzardComponent],
	imports: [
    CommonModule,
    StepperModule,
    ButtonModule,
    FlexLayoutModule,
    RouterModule.forChild([]),
  ],
	exports: [WizzardComponent],
})
export class WizzardModule {}
