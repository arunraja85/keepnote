import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student : Student;
  hobby : any;
  buttonText : string;
  isLoggedIn : boolean;
  btnCSSClass : string;
  isDisabled : boolean;
  userName: string;
  constructor() { 
    this.student = new Student();
    this.student.id = 1;
    this.student.name="Arunraja";
    this.student.email="arunraja@gmail.com";
    this.student.contactno=979;

    this.hobby = {"name":"arunraja","id":1};
    this.buttonText = "Login";
    this.isLoggedIn = true;
    this.userName="Arunraja";

  }

  ngOnInit() {
    if(this.isLoggedIn){
      this.buttonText = "Already Logged in";
      this.btnCSSClass = "btn btn-success";
      this.isDisabled = false;
    }else{
      this.buttonText = "Please Log in";
      this.btnCSSClass = "btn btn-warning";
      this.isDisabled = true;
    }
  }

  sayHello(){
    this.userName = "Hello Arunraja. How are you?"
  }

}
