import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { IconPosition, Icons } from '../icons/icons'

export type ButtonEvent = PointerEvent | MouseEvent

@Component({
  selector: 'ui-button',
  template: `
    <ng-container *ngIf="linkButton; else standardButton">
      <p-button
        [label]="text"
        [disabled]="disabled"
        styleClass="p-button-link"
        (onClick)="handlButtonClick($event)"
      ></p-button>
    </ng-container>
    <ng-template #standardButton>
      <button
        pButton
        [label]="text"
        [disabled]="disabled"
        (click)="handlButtonClick($event)"
        [icon]="icon"
        [iconPos]="iconPosition"
      ></button>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() text = ''
  @Input() disabled = false
  @Input() linkButton = false
  @Input() icon!: Icons
  @Input() iconPosition!: IconPosition
  @Output() buttonClick = new EventEmitter<ButtonEvent>()

  handlButtonClick(event: ButtonEvent) {
    this.buttonClick.emit(event)
  }
}
