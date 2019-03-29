import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-processus',
  templateUrl: './processus.component.html',
  styleUrls: ['./processus.component.css']
})
export class ProcessusComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(".RH").hide();
    $(".formations").hide();
    $(".projets").hide();
    $(".communication").hide();
    $(".devCommercial").hide();
  }

  visibilityRH(){
    $('.content-img').fadeOut(300);
    $('.formations').fadeOut(100);
    $('.projets').fadeOut(100);
    $('.communication').fadeOut(100);
    $('.devCommercial').fadeOut(100);
    $('.RH').fadeIn(1000);
  }

  visibilityFormations(){
    $('.content-img').fadeOut(300);
    $('.RH').fadeOut(100);
    $('.projets').fadeOut(100);
    $('.communication').fadeOut(100);
    $('.devCommercial').fadeOut(100);
    $('.formations').fadeIn(1000);
  }

  visibilityProjets(){
    $('.content-img').fadeOut(300);
    $('.RH').fadeOut(100);
    $('.formations').fadeOut(100);
    $('.communication').fadeOut(100);
    $('.devCommercial').fadeOut(100);
    $('.projets').fadeIn(1000);
  }

  visibilityCommunication(){
    $('.content-img').fadeOut(300);
    $('.RH').fadeOut(100);
    $('.formations').fadeOut(100);
    $('.projets').fadeOut(100);
    $('.devCommercial').fadeOut(100);
    $('.communication').fadeIn(1000);
  }

  visibilityDevCommercial(){
    $('.content-img').fadeOut(300);
    $('.RH').fadeOut(100);
    $('.formations').fadeOut(100);
    $('.projets').fadeOut(100);
    $('.communication').fadeOut(100);
    $('.devCommercial').fadeIn(1000);
  }
}
