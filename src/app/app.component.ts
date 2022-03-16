import { Component } from "@angular/core";

@Component({
  selector:'im-root',
  template:`
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pills">
      <li><a class="nav-link" routerLink="/welcome">Home</a></li>
      <li><a class="nav-link" routerLink="/inventory">Inventory</a></li>
    </ul>
  </nav>
  <div class="applicationArea">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ["./app.component.css"]
})

export class AppComponent{
  pageTitle: string = 'Inventory Management System';
}