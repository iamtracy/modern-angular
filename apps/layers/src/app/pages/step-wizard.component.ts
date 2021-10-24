import { Component } from '@angular/core'
import { WizardStep } from '@modern/shared/ui'

@Component({
  selector: 'modern-step-wizard',
  template: `
    <ui-wizard [wizardSteps]="wizardSteps">
      <ng-template #wizardButtons let-stepWizard>
        <div fxLayoutAlign="space-between">
          <ui-button (clicked)="stepWizard.handlePreviousStep()" [disabled]="stepWizard.isFirstStep" text="Prev"></ui-button>
          <div fxLayoutGap="1em">
            <ui-button *ngIf="stepWizard.currentStepIndex === 3" (clicked)="handleSave()" text="Save"></ui-button>
            <ui-button (clicked)="stepWizard.handleNextStep()" [disabled]="stepWizard.isLastStep" text="Next"></ui-button>
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
export class StepWizardComponent {
  wizardSteps: WizardStep[] = [
    { path: 'step-one' },
    { path: 'step-two' },
    { path: 'step-three' },
    { path: 'step-four'  },
  ]

  handleSave() {
    alert('saved!')
  }
}
