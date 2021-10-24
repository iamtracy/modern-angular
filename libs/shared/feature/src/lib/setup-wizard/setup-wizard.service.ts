import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject, map, Observable } from "rxjs";
import { SetupWizard } from "./setup-wizard.component";

@Injectable()
export class SetupWizardService {
  #setupWizard = new BehaviorSubject<SetupWizard>({
    firstName: null,
    lastName: null,
    valid: false,
  })
  setupWizard$ = this.#setupWizard.asObservable()

  get disabled$(): Observable<boolean> {
    return this.setupWizard$.pipe(
      map(({ valid }) => !valid)
    )
  }

  get value(): Partial<SetupWizard> {
    return this.#setupWizard.value
  }

  handleOnChange({ valid, value }: FormGroup): void {
    this.#setupWizard.next({ valid, ...value })
  }

  save(): void {
    console.log('submit', this.#setupWizard.value)
  }
}
