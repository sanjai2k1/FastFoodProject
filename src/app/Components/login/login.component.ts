import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {
    carouselItems = [
        { image: 'assets/images/cb.jfif', alt: 'Image 1' },
        { image: 'assets/images/cc.jfif', alt: 'Image 2' },
        { image: 'assets/images/cl.jfif', alt: 'Image 3' }
      ];
loginForm: FormGroup;

constructor(private fb: FormBuilder) {
this.loginForm = this.fb.group({
username: ['', Validators.required],
password: ['', Validators.required]
});
}

onSubmit() {
if (this.loginForm.valid) {
console.log('Form Submitted!', this.loginForm.value);
}
}
}