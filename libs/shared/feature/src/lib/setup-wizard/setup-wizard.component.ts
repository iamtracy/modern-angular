import { Component, OnInit } from '@angular/core'
import { WizardStep } from '@modern/shared/ui'
import { Observable } from 'rxjs'
import { SetupWizardBasicInfoComponent } from './screens/basic-info.component'
import { SetupWizardService } from './setup-wizard.service'

export interface SetupWizard {
  firstName?:  string | null | undefined,
  lastName?: string | null | undefined,
  valid: boolean,
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
              disabled: ((disabled$ | async) || stepWizard.isLastStep),
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
export class SetupWizardComponent implements OnInit {
  disabled$!: Observable<boolean>
  wizardSteps: WizardStep[] = [
    { component: SetupWizardBasicInfoComponent, path: 'step-one', label: 'Basic Info' },
    { path: 'step-two', label: 'Foo' },
    { path: 'step-three', label: 'Biz' },
    { path: 'step-four', label: 'Baz' },
  ]

  constructor(
    public setupWizardService: SetupWizardService
  ) {}

  ngOnInit() {
    this.disabled$ = this.setupWizardService.disabled$
  }

  handleNext() {
    this.setupWizardService.save()
  }
}
