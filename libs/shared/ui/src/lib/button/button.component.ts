import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Button, ButtonEvent, IconPosition } from '@modern/shared/ui'

@Component({
  selector: 'ui-button',
  template: `
    <ng-container *ngIf="button.linkButton; else standardButton">
      <p-button
        [label]="button.text"
        [disabled]="button.disabled ?? false"
        styleClass="p-button-link"
        (onClick)="handlButtonClick($event)"
      ></p-button>
    </ng-container>
    <ng-template #standardButton>
      <button
        pButton
        [label]="button.text"
        [disabled]="button.disabled"
        (click)="handlButtonClick($event)"
        [icon]="button.icon"
        [iconPos]="button.iconPosition"
      ></button>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() button: Button = {
    text: '',
    disabled: false,
    linkButton: false,
    icon: '',
    iconPosition: IconPosition.Left,
  }
  @Output() clicked = new EventEmitter<ButtonEvent>()

  handlButtonClick(event: ButtonEvent) {
    this.clicked.emit(event)
  }
}
