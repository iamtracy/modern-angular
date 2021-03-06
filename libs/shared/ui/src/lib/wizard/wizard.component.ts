import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { IconPosition, Icons } from '../..'
import { StepWizard, WizardStep } from './wizard.module'
import { WizardService } from './wizard.service'

@Component({
  selector: 'ui-wizard',
  templateUrl: './wizard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardComponent implements OnInit {
  @ContentChild('wizardButtons') wizardButtons!: TemplateRef<unknown>
  @Input() wizardSteps: WizardStep[] = []
  @Input() inititalStepIndex = 0
  @Input() previousButtonText = 'Previous'
  @Input() nextButtonText = 'Next'
  @Output() stepIndexChange = new EventEmitter<number>()
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
      tap(async ({ currentStepIndex }) => {
        await this.router.navigateByUrl(this.wizardSteps[currentStepIndex]?.path)
        this.stepIndexChange.emit(currentStepIndex)
      })
    )
  }

  handlePreviousStep = (): void => {
    this.wizardService.handlePreviousStep()
  }

  handleNextStep = (): void => {
    this.wizardService.handleNextStep()
  }
}
