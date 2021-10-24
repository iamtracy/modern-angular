import { CommonModule } from '@angular/common'
import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { FormComponent } from './form.component'
import { FormModule } from './form.module'

export default {
  title: 'Components/Form',
  component: FormComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormModule],
    }),
  ]
} as Meta<FormComponent>

export const withInputType: Story<FormComponent> = () => ({
  props: {
    fields: [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email address',
          placeholder: 'Enter email',
          required: true
        }
      }
    ]
  },
})

export const withTextareaType: Story<FormComponent> = () => ({
  props: {
    fields: [
      {
        key: 'description',
        type: 'textarea',
        templateOptions: {
          label: 'Description',
          placeholder: 'Some words about yourself',
        }
      }
    ]
  },
})

export const withCheckboxType: Story<FormComponent> = () => ({
  props: {
    fields: [
      {
        key: 'accept-terms',
        type: 'checkbox',
        templateOptions: {
          label: 'Accept Terms and Conditions',
        }
      }
    ]
  },
})

export const withRadioType: Story<FormComponent> = () => ({
  props: {
    fields: [
      {
        key: 'radio',
        type: 'radio',
        templateOptions: {
          label: 'Radio',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4', disabled: true },
          ],
        },
      },
    ]
  },
})
