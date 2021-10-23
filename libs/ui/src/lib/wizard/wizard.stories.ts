import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { WizardModule, WizardStep } from '@modern/ui';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { WizardComponent } from "./wizard.component";

@Component({
  selector: 'ui-one',
  template: 'one',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class OneComponent {}

@Component({
  selector: 'ui-two',
  template: 'two',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TwoComponent {}

@Component({
  selector: 'ui-three',
  template: 'three',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class ThreeComponent {}

@Component({
  selector: 'ui-four',
  template: 'four',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class FourComponent {}

const routes: WizardStep[] = [
  { component: OneComponent, path: 'step-1' },
  { component: TwoComponent, path: 'step-2' },
  { component: ThreeComponent, path: 'step-3'  },
  { component: FourComponent, path: 'step-4'  },
]

export default {
  title: 'Components/Wizzard',
  component: WizardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        WizardModule,
        FlexLayoutModule,
        RouterTestingModule,
      ],
    }),
  ]
} as Meta<WizardComponent>

export const withSteps: Story<WizardComponent> = () => ({
  props: {
    inititalStepIndex: 1,
    wizzardSteps: routes
  },
})
