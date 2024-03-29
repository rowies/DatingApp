import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any = {};

  @Output() cancelRegister = new EventEmitter();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  register(){
      this.authService.register(this.model).subscribe(
        ()=>{
          console.log('registration succesfull');
        },
        error => {
          console.log(error);
        }
      )
  }

  cancel(){
      this.cancelRegister.emit(false);
  }



}
