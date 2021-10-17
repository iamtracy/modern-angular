import { CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { MenuItem } from 'primeng/api'
import { StepperComponent } from './stepper.component'
import { StepperModule } from './stepper.module'

export default {
  title: 'Components/Stepper',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, StepperModule, RouterTestingModule],
    }),
  ]
} as Meta<any>

const items: MenuItem[] = [
  { label: 'Step 1' },
  { label: 'Step 2' },
  { label: 'Step 3' },
  { label: 'Step 4' },
  { label: 'Step 5' },
]

export const withSteps: Story<StepperComponent> = () => ({
  props: {
    items: items
  },
})
