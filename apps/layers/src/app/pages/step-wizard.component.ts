import { ChangeDetectionStrategy, Component } from '@angular/core'
import { WizardStep } from '@modern/ui'

@Component({
  selector: 'modern-one',
  template: 'one',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class OneComponent {}
@Component({
  selector: 'modern-two',
  template: 'two',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TwoComponent {}
@Component({
  selector: 'modern-three',
  template: 'three',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class ThreeComponent {}
@Component({
  selector: 'modern-four',
  template: 'four',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class FourComponent {}

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
    { component: OneComponent, path: 'step-one' },
    { component: TwoComponent, path: 'step-two' },
    { component: ThreeComponent, path: 'step-three', label: 'Custom Label'  },
    { component: FourComponent, path: 'step-four'  },
  ]

  handleSave() {
    alert('saved!')
  }
}
