import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ButtonModule as NgButtonModule } from 'primeng/button'
import { ButtonComponent } from './button.component'


@NgModule({
  declarations: [ButtonComponent],
	imports: [CommonModule, NgButtonModule],
	exports: [ButtonComponent],
})
export class ButtonModule {}
