import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppImports } from './app.imports';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DOCUMENT, registerLocaleData } from '@angular/common';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterLink,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppImports, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MTT-STI-APP';

  listMenu = [
    'dashboard',
    'clients',
    'products',
    'products-categories',
    'logs',
    'support',
    'settings'
  ]

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activeMenu(this.document.location.href);

    this.document.addEventListener('click', (event: any) => {

      if (this.listMenu.indexOf(event.target.id) != -1) {
        this.activeMenu(event.target.id);

        // this.listMenu.map((menu) => {
        //   let sideNav: any = this.document.getElementById(menu);

        //   if (menu != event.target.id) {
        //     sideNav.classList.remove('activemenu');
        //   } else {
        //     sideNav.classList.add('activemenu');
        //   }
        // })
      }
    });
  }

  activeMenu(page) {
    this.listMenu.map((menu) => {
      let sideNav: any = this.document.getElementById(menu);
      // let pageFormat = page.substring(page.indexOf('-')).replace(/[^a-zA-Z0-9]/g, "");
      let menuFormat = menu.substring(menu.indexOf('-')).replace(/[^a-zA-Z0-9]/g, "");
      let pageFormat = page.substring(page.length - menuFormat.length);

      if (pageFormat == menuFormat) {
        sideNav.classList.add('activemenu');
      } else {
        sideNav.classList.remove('activemenu');
      }

      // if (pageFormat.includes(menuFormat)) {
      //   sideNav.classList.add('activemenu');
      // } else {
      //   sideNav.classList.remove('activemenu');
      // }
    })
  }

  getLocationPage(URL) {
    // console.log(URL, this.document.location.href)
    if (this.document.location.href.includes(URL)) {
      // console.log(true)
      return true;
    } else {
      // console.log(false)
      return false;
    }
  }

}
