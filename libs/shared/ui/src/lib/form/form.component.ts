import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'ui-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="handleOnSubmit()">
      <formly-form [form]="form" [fields]="fields" (modelChange)="handleOnChange()"></formly-form>
      <ng-container
        [ngTemplateOutlet]="formButtons"
        [ngTemplateOutletContext]="{ $implicit: form }"
      ></ng-container>
    </form>
  `,
})
export class FormComponent {
  @ContentChild('formButtons') formButtons!: TemplateRef<unknown>
  @Input() fields: FormlyFieldConfig[] = []
  @Output() submit = new EventEmitter<unknown>()
  @Output() modelChange = new EventEmitter()
  form = new FormGroup({});

  handleOnChange() {
    this.modelChange.emit(this.form.value)
  }

  handleOnSubmit() {
    this.submit.emit(this.form.value)
  }
}
