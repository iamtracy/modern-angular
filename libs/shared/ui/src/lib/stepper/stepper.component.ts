import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'ui-stepper',
  templateUrl: './stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent {
  @Input() items: MenuItem[] = []
  @Input() activeIndex = 0
  @Input() initialIndex = 0
  @Input() buttonTemplate!: TemplateRef<any>
  @Output() stepChange = new EventEmitter<number>()

  handlActiveIndexChange(index: number) {
    this.stepChange.emit(index)
  }
}
