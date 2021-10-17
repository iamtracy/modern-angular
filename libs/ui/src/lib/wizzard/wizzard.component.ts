import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Route, Router } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { IconPosition, Icons } from '../icons/icons'
import { WizzardService } from './wizard.service'

export interface WizzardStep extends
  Pick<Route, 'component' | 'path'>,
  Pick<MenuItem, 'label'>
{
  label?: string
}

export interface StepWizard {
  wizardSteps: WizzardStep[],
  currentStepIndex: number,
  isFirstStep: boolean,
  isLastStep: boolean,
}

@Component({
  selector: 'ui-wizzard',
  templateUrl: './wizzard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizzardComponent implements OnInit {
  @Input() steps: WizzardStep[] = []
  @Input() inititalStepIndex = 0
  stepWizard$!: Observable<StepWizard>
  icons = Icons
  iconPosition = IconPosition

  constructor(
    private router: Router,
    private wizzardService: WizzardService,
  ) { }

  ngOnInit(): void {
    this.#navigate(this.inititalStepIndex)
    this.stepWizard$ = this.wizzardService.stepWizzard$.pipe(
      tap(({ currentStepIndex }) => this.#navigate(currentStepIndex))
    )
    this.wizzardService.init(this.steps, this.inititalStepIndex)
  }

  handlePreviousStep(): void {
    this.wizzardService.handlePreviousStep()
  }

  handleNextStep(): void {
    this.wizzardService.handleNextStep()
  }

  #navigate(currentStepIndex: StepWizard['currentStepIndex']) {
    this.router.navigateByUrl(this.steps[currentStepIndex].path ?? '')
  }
}
