import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { WizzardModule } from './wizard.module';
import { WizzardComponent, WizzardStep } from "./wizzard.component";

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

const routes: WizzardStep[] = [
  { component: OneComponent, path: 'step-1' },
  { component: TwoComponent, path: 'step-2' },
  { component: ThreeComponent, path: 'step-3'  },
  { component: FourComponent, path: 'step-4'  },
]

export default {
  title: 'Components/Wizzard',
  component: WizzardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        WizzardModule,
        FlexLayoutModule,
        RouterTestingModule,
      ],
    }),
  ]
} as Meta<WizzardComponent>

export const withSteps: Story<WizzardComponent> = () => ({
  props: {
    inititalStepIndex: 1,
    wizzardSteps: routes
  },
})
