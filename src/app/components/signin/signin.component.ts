import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  public user: any;

  constructor (public _userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user ={
      email: '',
      password: '',
    };
    if(this._userService.isAuthenticatedUser()){
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
  }
  

  onSubmit(signInForm: NgForm){
    this.user.email = signInForm.value.email;
    this.user.password = signInForm.value.password;
    console.log("User :", signInForm.value.email)
    let formData = new FormData()
    formData.append("email", signInForm.value.email)
    formData.append("password", signInForm.value.password)
    this._userService.login(formData)
  }

}
