import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SetupWizard } from '../setup-wizard.component';
import { SetupWizardService } from '../setup-wizard.service';

@Component({
  selector: 'shared-setup-wizard-basic-info',
  template: '<ui-form [fields]="fields" (modelChange)="handleOnChange($event)"></ui-form>',
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

  constructor(
    private setupWizardService: SetupWizardService,
  ) {}

  handleOnChange(basicInfo: Partial<SetupWizard>) {
    this.setupWizardService.handleOnChange(basicInfo)
  }
}
