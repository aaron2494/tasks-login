import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators, } from "@angular/forms";
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';

interface FormSignUp{
  password:FormControl<string|null>;
  email: FormControl<string|null>
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styles: ``
})

export default class SignUpComponent {

  private _formBuilder = inject (FormBuilder);
  private _authService =inject(AuthService)

  isRequired(field: "email"| "password"){
    return isRequired(field,this.form)
  }
  
  hasEmailError(){
    return hasEmailError(this.form);
  }

  form= this._formBuilder.group<FormSignUp>({
    password: this._formBuilder.control("",Validators.required),
    email: this._formBuilder.control("",[Validators.required,Validators.email]),
  })

async  submit(){
 if (this.form.invalid)return
try {
  const {email,password}=this.form.value;
  if(!email || !password)return;
  this._authService.signUp({email,password});
  toast.success("usuario creado correctamente");
} catch (error) {
  toast.error("ocurrio un error");
}
  }
}
