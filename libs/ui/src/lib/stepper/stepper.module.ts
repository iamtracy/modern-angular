import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { StepsModule } from 'primeng/steps'
import { StepperComponent } from './stepper.component'

@NgModule({
  declarations: [StepperComponent],
	imports: [CommonModule, StepsModule, RouterModule.forChild([])],
	exports: [StepperComponent],
})
export class StepperModule {}
