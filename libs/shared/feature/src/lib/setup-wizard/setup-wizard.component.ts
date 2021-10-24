import { Component } from '@angular/core'
import { WizardStep } from '@modern/shared/ui'
import { SetupWizardBasicInfoComponent } from './screens/basic-info.component'
import { SetupWizardService } from './setup-wizard.service'

export interface SetupWizard {
  firstName?:  string | null | undefined,
  lastName?: string | null | undefined,
}

@Component({
  selector: 'shared-setup-wizard',
  template: `
    <ui-wizard [wizardSteps]="wizardSteps">
      <ng-template #wizardButtons let-stepWizard>
        <div fxLayoutAlign="space-between">
          <ui-button
            (clicked)="stepWizard.handlePreviousStep()"
            [button]="{
              disabled: stepWizard.isFirstStep,
              text: 'Prev'
            }"
          >
          </ui-button>
          <ui-button
            (clicked)="stepWizard.handleNextStep(); handleNext()"
            [button]="{
              disabled: stepWizard.isLastStep,
              text: 'Next'
            }"
          >
          </ui-button>
        </div>
      </ng-template>
    </ui-wizard>
  `,
  styles: [`
    :host {
      display: block;
      font-family: sans-serif;
      max-width: 1000px;
      margin: 50px auto;
    }
  `],
})
export class SetupWizardComponent {
  wizardSteps: WizardStep[] = [
    { component: SetupWizardBasicInfoComponent, path: 'step-one', label: 'Basic Info' },
    { path: 'step-two', label: 'Foo' },
    { path: 'step-three', label: 'Biz' },
    { path: 'step-four', label: 'Baz' },
  ]

  constructor(
    public setupWizardService: SetupWizardService
  ) {}

  handleNext() {
    this.setupWizardService.save()
  }
}
