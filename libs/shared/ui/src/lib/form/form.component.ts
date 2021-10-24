import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'ui-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="handleOnSubmit()">
      <formly-form [form]="form" [fields]="fields" [model]="model" (modelChange)="handleOnChange()"></formly-form>
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
  @Input() model!: unknown
  @Output() submit = new EventEmitter<unknown>()
  @Output() modelChange = new EventEmitter<FormGroup>()
  form = new FormGroup({});

  handleOnChange() {
    this.modelChange.emit(this.form)
  }

  handleOnSubmit() {
    this.submit.emit(this.form.value)
  }
}
