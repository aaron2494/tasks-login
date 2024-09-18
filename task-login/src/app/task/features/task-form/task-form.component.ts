import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskCreate, TaskService } from '../../data-acces/task.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styles: ``
})
export default class TaskFormComponent {
  
  private _formBuilder = inject(FormBuilder);
  private _taskService= inject(TaskService);

  form = this._formBuilder.group({
    title: ["", Validators.required],
    completed: [false, Validators.required]
  });

  async submit(){
if (this.form.invalid)return 

try {
  const{ title,completed } = this.form.value;
  const task:TaskCreate={
    title: title||"",
    completed: !!completed,   
  };
 
  await this._taskService.create(task);
  toast.success("tarea creada")

} catch (error) {
  toast.error("ocurrio un problema")
}
  }
}
