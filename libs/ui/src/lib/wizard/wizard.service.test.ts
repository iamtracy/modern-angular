import { WizardStep } from '@modern/ui'
import { createServiceFactory, SpectatorService } from '@ngneat/spectator'
import { firstValueFrom } from 'rxjs'
import { WizardService } from './wizard.service'

describe('WizardService', () => {
  let spectator: SpectatorService<WizardService>
  const createService = createServiceFactory(WizardService)
  const wizardSteps: WizardStep[] = [
    { path: 'one' },
    { path: 'two', label: 'Custom Label' },
    { path: 'three' },
  ]

  beforeEach(() => spectator = createService())

  it('instantiates with default state', async () => {
    expect(await firstValueFrom(spectator.service.stepWizard$)).toEqual({
      currentStepIndex: 0,
      isFirstStep: true,
      isLastStep: true,
      wizardSteps: [],
    })
  })


  it('initializes', async () => {
    const inititalStepIndex = 1
    spectator.service.init(wizardSteps, inititalStepIndex)

    expect(await firstValueFrom(spectator.service.stepWizard$)).toEqual({
      currentStepIndex: inititalStepIndex,
      isFirstStep: false,
      isLastStep: false,
      wizardSteps: [
        { path: 'one', label: 'One' },
        { path: 'two', label: 'Custom Label' },
        { path: 'three', label: 'Three' },
      ]
    })
  })

  it('handles next step', async () => {
    spectator.service.init(wizardSteps)
    spectator.service.handleNextStep()
    spectator.service.handleNextStep()

    expect(await firstValueFrom(spectator.service.stepWizard$)).toEqual({
      currentStepIndex: 2,
      isFirstStep: false,
      isLastStep: true,
      wizardSteps: [
        { path: 'one', label: 'One' },
        { path: 'two', label: 'Custom Label' },
        { path: 'three', label: 'Three' },
      ]
    })
  })

  it('handles previous step', async () => {
    const inititalStepIndex = 1
    spectator.service.init(wizardSteps, inititalStepIndex)
    spectator.service.handlePreviousStep()
    expect(await firstValueFrom(spectator.service.stepWizard$)).toEqual({
      currentStepIndex: 0,
      isFirstStep: true,
      isLastStep: false,
      wizardSteps: [
        { path: 'one', label: 'One' },
        { path: 'two', label: 'Custom Label' },
        { path: 'three', label: 'Three' },
      ]
    })
  })
})
