import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core'
import { Route, Router } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { IconPosition, Icons } from '../icons/icons'
import { WizardService } from './wizard.service'

export interface WizardStep extends
  Pick<Route, 'component'>,
  Pick<MenuItem, 'label'>
{
  path: string
}

export interface StepWizard {
  currentStepIndex: number,
  inititalStepIndex?: number,
  isFirstStep: boolean,
  isLastStep: boolean,
  wizardSteps: WizardStep[],
}

@Component({
  selector: 'ui-wizard',
  templateUrl: './wizard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardComponent implements OnInit {
  @ContentChild('wizardButtons') wizardButtons!: TemplateRef<any>
  @Input() wizardSteps: WizardStep[] = []
  @Input() inititalStepIndex = 0
  @Input() previousButtonText = 'Previous'
  @Input() nextButtonText = 'Next'
  stepWizard$!: Observable<StepWizard>
  icons = Icons
  iconPosition = IconPosition

  constructor(
    private router: Router,
    public wizardService: WizardService,
  ) { }

  ngOnInit(): void {
    this.router.config = this.wizardSteps
    this.wizardService.init(this.wizardSteps, this.inititalStepIndex)
    this.stepWizard$ = this.wizardService.stepWizard$.pipe(
      tap(({ currentStepIndex }) => (
        this.router.navigateByUrl(this.wizardSteps[currentStepIndex]?.path)
      ))
    )
  }

  handlePreviousStep = (): void => {
    this.wizardService.handlePreviousStep()
  }

  handleNextStep = (): void => {
    this.wizardService.handleNextStep()
  }
}
