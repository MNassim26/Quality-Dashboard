import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifier-compte',
  templateUrl: './modifier-compte.component.html',
  styleUrls: ['./modifier-compte.component.css']
})
export class ModifierCompteComponent implements OnInit {
  Role : string = "Formations";
  constructor() { }

  ngOnInit() {
  }

}
