import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AppComponent} from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  project1 = new AppComponent();
  title1 = this.project1.title
  
  constructor() { }

  ngOnInit() {
    $("#login-button").click(function(event){
      event.preventDefault();
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
    });

  }

  onSubmit() {
  }

}
