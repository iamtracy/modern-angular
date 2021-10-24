import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SetupWizard } from "./setup-wizard.component";

@Injectable()
export class SetupWizardService {
  #valid = false
  #setupWizard = new BehaviorSubject<SetupWizard>({
    firstName: null,
    lastName: null,
  })
  setupWizard$ = this.#setupWizard.asObservable()

  handleOnChange(setupWizard: Partial<SetupWizard>): void {
    this.#setupWizard.next(setupWizard)
  }

  save(): void {
    console.log('submit', this.#setupWizard.value)
  }
}
