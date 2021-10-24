import { Component } from '@angular/core'
import { WizardStep } from '@modern/shared/ui'

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
          <div fxLayoutGap="1em">
            <ui-button
              *ngIf="stepWizard.currentStepIndex === 3"
              (clicked)="handleSave()"
              [button]="{
                text: 'Save'
              }"
            >
            </ui-button>
            <ui-button
              (clicked)="stepWizard.handleNextStep()"
              [button]="{
                disabled: stepWizard.isLastStep,
                text: 'Next'
              }"
            >
            </ui-button>
          </div>
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
    { path: 'step-one', label: 'Basic Info' },
    { path: 'step-two', label: 'Foo' },
    { path: 'step-three', label: 'Biz' },
    { path: 'step-four', label: 'Baz' },
  ]

  handleSave() {
    alert('saved!')
  }
}
