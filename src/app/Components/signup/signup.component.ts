import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signupForm: FormGroup;

constructor(private fb: FormBuilder) {
this.signupForm = this.fb.group({
name: ['', Validators.required],
dob: ['', Validators.required],
phno:['',Validators.required],
username: ['', Validators.required],
email: ['', [Validators.required, Validators.email]],
password: ['', Validators.required]
});
}

onSubmit() {
if (this.signupForm.valid) {
console.log('Form Submitted!', this.signupForm.value);
}
}
}