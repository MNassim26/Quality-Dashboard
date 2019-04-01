import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-saisie-donnees',
  templateUrl: './saisie-donnees.component.html',
  styleUrls: ['./saisie-donnees.component.css']
})
export class SaisieDonneesComponent implements OnInit {
  role : String ="Formations";
  constructor() { }

  ngOnInit() {
    $(".RH").hide();
    $(".formations").hide();
    $(".projets").hide();
    $(".communication").hide();
    $(".devCommercial").hide();

    if (this.role == 'Quartet'){
      $(".RH").fadeIn(0);
      $(".formations").fadeIn(0);
      $(".projets").fadeIn(0);
      $(".communication").fadeIn(0);
      $(".devCommercial").fadeIn(0);
    }
    else if (this.role == 'RH'){
      $(".RH").fadeIn(0);
    }
    else if (this.role == "Formations"){
      $(".formations").fadeIn(0);
    }
    else if (this.role == "RH & Formations"){
      $(".RH").fadeIn(0);
      $(".formations").fadeIn(0);
    }
    else if(this.role == "Projets"){
      $(".projets").fadeIn(0);
    }
    else if(this.role == "Communication"){
      $(".communication").fadeIn(0);
    }
    else if(this.role == "Devloppement Commercial"){
      $(".devCommercial").fadeIn(0);
    }
  }

}
