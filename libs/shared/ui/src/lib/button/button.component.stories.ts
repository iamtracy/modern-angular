import { CommonModule } from '@angular/common'
import { Button, ButtonComponent } from '@modern/shared/ui'
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

export const withText: Story<Button> = () => ({
  props: {
    button: {
      text: 'click me'
    }
  },
})

export const withLink: Story<Button> = () => ({
  props: {
    button: {
      linkButton: true,
      text: 'click me'
    }
  },
})

export const withDisabled: Story<Button> = () => ({
  props: {
    button: {
      disabled: true,
      text: 'click me'
    }
  },
})
