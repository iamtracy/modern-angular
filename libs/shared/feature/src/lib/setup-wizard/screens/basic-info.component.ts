import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SetupWizardService } from '../setup-wizard.service';

@Component({
  selector: 'shared-setup-wizard-basic-info',
  template: '<ui-form [fields]="fields" [model]="model" (modelChange)="handleOnChange($event)"></ui-form>',
})
export class SetupWizardBasicInfoComponent {
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        required: true,
      }
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        required: true,
      }
    }
  ]
  model = this.setupWizardService.value

  constructor(
    private setupWizardService: SetupWizardService,
  ) {}

  handleOnChange(formGroup: FormGroup) {
    this.setupWizardService.handleOnChange(formGroup)
  }
}
