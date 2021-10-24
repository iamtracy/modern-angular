import { Injectable } from "@angular/core";
import { StepWizard, WizardStep } from "@modern/shared/ui";
import { pascalCase } from "pascal-case";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class WizardService {
  #stepWizard = new BehaviorSubject<StepWizard>({
    currentStepIndex: 0,
    isFirstStep: true,
    isLastStep: true,
    wizardSteps: [],
  })
  stepWizard$ = this.#stepWizard.asObservable()

  init(wizardSteps: WizardStep[], inititalStepIndex: number = 0): void {
    this.#stepWizard.next({
      currentStepIndex: inititalStepIndex,
      wizardSteps: wizardSteps.map(wizardStep => ({
        ...wizardStep,
        label: wizardStep.label ?? pascalCase(wizardStep.path).replace(/([A-Z])/g, '$1'),
      })),
      isFirstStep: this.#isFirstStep(inititalStepIndex),
      isLastStep: this.#isLastStep(inititalStepIndex),
    })
  }

  handlePreviousStep(): void {
    const currentStepIndex = this.#wizard.currentStepIndex - 1
    this.#stepWizard.next({
      ...this.#wizard,
      currentStepIndex,
      isFirstStep:  this.#isFirstStep(currentStepIndex),
      isLastStep: this.#isLastStep(currentStepIndex),
    })
  }

  handleNextStep(): void {
    const currentStepIndex = this.#wizard.currentStepIndex + 1
    this.#stepWizard.next({
      ...this.#wizard,
      currentStepIndex,
      isFirstStep: this.#isFirstStep(currentStepIndex),
      isLastStep: this.#isLastStep(currentStepIndex),
    })
  }

  #isFirstStep(currentStepIndex: number): boolean {
    return currentStepIndex === 0
  }

  #isLastStep(currentStepIndex: number): boolean {
    return currentStepIndex === this.#wizard.wizardSteps.length - 1
  }

  get #wizard(): StepWizard {
    return this.#stepWizard.value
  }
}
