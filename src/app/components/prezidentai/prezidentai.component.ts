import { Component, OnInit } from '@angular/core';
import {Prezidentas} from "../../models/prezidentas";

@Component({
  selector: 'app-prezidentai',
  templateUrl: './prezidentai.component.html',
  styleUrls: ['./prezidentai.component.scss']
})
export class PrezidentaiComponent implements OnInit {
  public prezidentai: Prezidentas[];
  public megstamiausioPrezidentoVardas?: string;

  constructor() {
    this.prezidentai = [];

    this.prezidentai.push(new Prezidentas("Gitanas"));
    this.prezidentai.push(new Prezidentas("Rolandas"));
    this.prezidentai.push(new Prezidentas("Algirdas"));
  }

  public pasirinktiMegstamiausiaPrezidenta(prezidentas: Prezidentas): void {
    console.log("Prezidentas pasirinktas!", prezidentas);

    this.megstamiausioPrezidentoVardas = prezidentas.vardas;
  }

  ngOnInit(): void {
  }
}
