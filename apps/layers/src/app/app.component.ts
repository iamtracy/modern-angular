import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { WizzardComponent, WizzardStep } from 'libs/ui/src/lib/wizzard/wizzard.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'modern-one',
  template: 'one',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class OneComponent {}

@Component({
  selector: 'modern-two',
  template: 'two',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TwoComponent {}

@Component({
  selector: 'modern-three',
  template: 'three',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class ThreeComponent {}

@Component({
  selector: 'modern-four',
  template: 'four',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class FourComponent {}

@Component({
  selector: 'modern-step-1-buttons',
  template: '<ui-button (buttonClick)="onWizzardStepSelected(wizardStep)" [text]="wizardStep.text"></ui-button>',
})
export class ModernOneButtonComponent  {
  @Input() wizardStep!: any;
  @Input() currentStepIndex!: number;
  @Input() onWizzardStepSelected!: (wizardStep: WizzardStep) => void;
}
const routes: WizzardStep[] = [
  { component: OneComponent, path: 'step-1' },
  { component: TwoComponent, path: 'step-2' },
  { component: ThreeComponent, path: 'step-3'  },
  { component: FourComponent, path: 'step-4'  },
]

@Component({
  selector: 'modern-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(WizzardComponent) wizzard!: WizzardComponent
  stepWizardStep$!: Observable<number>
  steps = routes

  ngAfterViewInit() {
    this.stepWizardStep$ = this.wizzard.stepWizard$.pipe(
      map(({ currentStepIndex }) => currentStepIndex)
    )
  }

  handleSave() {
    alert('saved!')
  }
}
