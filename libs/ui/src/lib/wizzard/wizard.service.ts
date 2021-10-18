import { Injectable } from "@angular/core";
import { pascalCase } from "pascal-case";
import { BehaviorSubject } from "rxjs";
import { StepWizard, WizzardStep } from "./wizzard.component";

@Injectable({ providedIn: 'root' })
export class WizzardService {
  #stepWizzard = new BehaviorSubject<StepWizard>({
    currentStepIndex: 0,
    isFirstStep: true,
    isLastStep: true,
    wizardSteps: [],
  })
  stepWizzard$ = this.#stepWizzard.asObservable()

  init(steps: WizzardStep[], initialIndex: number): void {
    const items = steps.map(item => ({
      ...item,
      label: item.label ?? pascalCase(item.path ?? '').replace('_', ' ')
    }))
    this.#stepWizzard.next({
      currentStepIndex: initialIndex,
      wizardSteps: items,
      isFirstStep: initialIndex === 0,
      isLastStep: initialIndex === items.length,
    })
  }

  handlePreviousStep(): void {
    const newStepIndex = this.#wizard.currentStepIndex - 1
    this.#stepWizzard.next({
      ...this.#wizard,
      currentStepIndex: newStepIndex,
      isFirstStep: newStepIndex === 0,
      isLastStep: newStepIndex === this.#wizard.wizardSteps.length - 1,
    })
  }

  handleNextStep(): void {
    const newStepIndex = this.#wizard.currentStepIndex + 1
    this.#stepWizzard.next({
      ...this.#wizard,
      currentStepIndex: newStepIndex,
      isFirstStep: newStepIndex === 0,
      isLastStep: newStepIndex === this.#wizard.wizardSteps.length - 1,
    })
  }

  get #wizard(): StepWizard {
    return this.#stepWizzard.value
  }
}
