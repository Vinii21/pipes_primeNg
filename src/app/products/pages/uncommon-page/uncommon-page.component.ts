import { Component } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n select
  public name: string = "Vinicio";
  public gender: "male" | "female" = "male";
  public invitationMap = {
    "male": "invitarlo",
    "female": "invitarla",
  }

  changeClient():void {
    this.name = "Melissa"
    this.gender = "female"
  }

  // i18Plural
  public clients: string[] = ["Francisco", "Amelia", "Vanesa", "Kate"];

  public clientsMap = {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos 1 cliente esperando.",
    "=2": "tenemos 2 clientes esperando.",
    "other": "tenemos # clientes esperando.",
  }

  deleteClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: "Vinicio",
    age: 25,
    address: "Sarchi"
  }

  // async pipe
  public myObservalTimer = interval(2000);

}
