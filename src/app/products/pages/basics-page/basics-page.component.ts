import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'vinicio';
  public nameUpper: string = 'VINICIO';
  public fullName: string = 'ViNicIO cHavARrÍa';
  public customDate: Date = new Date

}
