import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
	imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormlyModule.forRoot({
      extras: {
        lazyRender: true
      },
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyPrimeNGModule,
  ],
	exports: [FormComponent],
})
export class FormModule {}
