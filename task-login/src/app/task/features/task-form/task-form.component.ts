import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styles: ``
})
export default class TaskFormComponent {
  
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group({
    tittle: ["", Validators.required],
    completed: ["", Validators.required]
  });

submit(){

}
}
