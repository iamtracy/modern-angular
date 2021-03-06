import { RouterTestingModule } from '@angular/router/testing'
import { StepWizard, WizardStep } from '@modern/shared/ui'
import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator'
import { BehaviorSubject } from 'rxjs'
import { ButtonComponent } from '../button/button.component'
import { IconPosition, Icons } from '../icons/icons'
import { WizardComponent } from './wizard.component'
import { WizardService } from './wizard.service'

describe('WizardComponent', () => {
  let spectator: Spectator<WizardComponent>
  const wizardSteps: WizardStep[] = [
    { path: 'one' },
    { path: 'two' },
  ]
  const stepWizard: StepWizard = {
    currentStepIndex: 0,
    isFirstStep: true,
    isLastStep: false,
    wizardSteps
  }
  const createComponent = createComponentFactory({
    shallow: true,
    component: WizardComponent,
    imports: [RouterTestingModule],
    providers: [
      mockProvider(WizardService, {
        init: jest.fn(() => 'Init'),
        handleNextStep: jest.fn(() => 'Previous'),
        handlePreviousStep: jest.fn(() => 'Previous'),
        stepWizard$: new BehaviorSubject(stepWizard),
      })
    ],
  })

  beforeEach(() => spectator = createComponent())

  it('should have a ui-stepper component', async () => {
    // @ts-expect-error - valid inputs
    const { activeIndex, initialIndex, items } = spectator.query('ui-stepper')
    expect(items).toBe(wizardSteps)
    expect(activeIndex).toBe(0)
    expect(initialIndex).toBe(0)
  })

  it('should have default next and previous buttons', () => {
    // @ts-expect-error - ui-button is valid query
    const defaultPreviousButton = spectator.query<ButtonComponent>('.default-buttons .previous')
    expect(defaultPreviousButton?.button.text).toBe('Previous')
    expect(defaultPreviousButton?.button.disabled).toBeTruthy()
    expect(defaultPreviousButton?.button.icon).toBe(Icons.Left)
    expect(defaultPreviousButton?.button.iconPosition).toBe(IconPosition.Left)
    spectator.triggerEventHandler('.default-buttons .previous', 'clicked', null)
    expect(spectator.component.wizardService.handlePreviousStep).toHaveBeenCalled()

    // @ts-expect-error - ui-button is valid query
    const defaultNextButton = spectator.query<ButtonComponent>('.default-buttons .next')
    expect(defaultNextButton?.button.text).toBe('Next')
    expect(defaultNextButton?.button.disabled).toBeFalsy()
    expect(defaultNextButton?.button.icon).toBe(Icons.Right)
    expect(defaultNextButton?.button.iconPosition).toBe(IconPosition.Right)
    spectator.triggerEventHandler('.default-buttons .next', 'clicked', null)
    expect(spectator.component.wizardService.handleNextStep).toHaveBeenCalled()
  })
})
