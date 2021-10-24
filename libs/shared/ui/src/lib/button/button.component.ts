import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Button, ButtonEvent, IconPosition } from '@modern/shared/ui'

@Component({
  selector: 'ui-button',
  template: `
    <ng-container *ngIf="linkButton; else standardButton">
      <p-button
        [label]="text"
        [disabled]="disabled ?? false"
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
        [icon]="icon ?? ''"
        [iconPos]="iconPosition ?? 'left'"
      ></button>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() text: Button['text'] = ''
  @Input() disabled: Button['disabled'] = false
  @Input() linkButton: Button['linkButton'] = false
  @Input() icon!: Button['icon']
  @Input() iconPosition: Button['iconPosition'] = IconPosition.Left
  @Output() clicked = new EventEmitter<ButtonEvent>()

  handlButtonClick(event: ButtonEvent) {
    this.clicked.emit(event)
  }
}