import { CommonModule } from '@angular/common'
import { ButtonComponent } from '@modern/shared/ui'
import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { ButtonModule } from 'primeng/button'

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ButtonModule,
      ],
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
