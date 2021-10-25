import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SetupWizardService } from '../setup-wizard.service';

@Component({
  selector: 'shared-setup-wizard-preferences',
  template: '<ui-form [fields]="fields" [model]="model" (modelChange)="handleOnChange($event)"></ui-form>',
})
export class SetupWizardPreferencesComponent {
  fields: FormlyFieldConfig[] = [
    {
      key: 'preferences',
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
          { value: 4, label: 'Option 4' },
        ],
      },
    },
  ]
  model = this.setupWizardService.value

  constructor(
    private setupWizardService: SetupWizardService,
  ) {}

  handleOnChange(formGroup: FormGroup) {
    this.setupWizardService.handleOnChange(formGroup)
  }
}
