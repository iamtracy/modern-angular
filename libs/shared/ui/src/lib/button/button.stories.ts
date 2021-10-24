import { CommonModule } from '@angular/common'
import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { ButtonModule } from 'primeng/button'
import { ButtonComponent } from './button.component'

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ButtonModule],
    }),
  ]
} as Meta<ButtonComponent>

export const withText: Story<ButtonComponent> = () => ({
  props: {
    text: 'click me'
  },
})

export const withLink: Story<ButtonComponent> = () => ({
  props: {
    linkButton: true,
    text: 'click me'
  },
})

export const withDisabled: Story<ButtonComponent> = () => ({
  props: {
    disabled: true,
    text: 'click me'
  },
})
