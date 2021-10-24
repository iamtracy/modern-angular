import { CommonModule } from '@angular/common'
import { EventEmitter, NgModule } from '@angular/core'
import { ButtonModule as NgButtonModule } from 'primeng/button'
import { IconPosition, Icons } from '../..'
import { ButtonComponent } from './button.component'

export type ButtonEvent = PointerEvent | MouseEvent

export interface Button {
  text: string,
  disabled?: boolean,
  linkButton?: boolean,
  icon?: Icons,
  iconPosition?: IconPosition,
  buttonClick?: EventEmitter<any>
}

@NgModule({
  declarations: [ButtonComponent],
	imports: [CommonModule, NgButtonModule],
	exports: [ButtonComponent],
})
export class ButtonModule {}
