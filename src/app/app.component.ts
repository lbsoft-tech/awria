import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { isPlatformBrowser } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Awira';
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';
  playerCollapsed = true;
  singlePage = false;

  darkTheme = false;

  singlePages = [
    '/user/login'
  ];

  constructor(
    private overlayContainer: OverlayContainer,
    private router: Router
  ) {  }

  ngOnInit() {
    this.updateSidenavForWindow();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!this.isMobile()) {
          this.singlePages.includes(event.url) ? this.singlePage = true : this.singlePage = false;
          this.singlePage ? this.sidenav.close() : this.sidenav.open();
        }
      }
    });
    //this.user = this.store.select('user');
    if (this.darkTheme) {
      this.overlayContainer.getContainerElement().classList.add('zondimo-dark-theme');
    }
  }

  isMobile() {
    return isPlatformBrowser && (window.innerWidth < 768);
  }

  /**
  * Update the sidenav property for the current window.
  */
  updateSidenavForWindow() {
    if (this.isMobile()) {
      this.navMode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav.open();
      this.playerCollapsed = false;
    }
  }

  /**
   * Listen to window resize.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.isMobile()) {
      this.navMode = 'over';
    } else {
      this.navMode = 'side';
      this.playerCollapsed = false;
      this.sidenav.open();
    }
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  /**
   * Player collapsed event callback
   *
   * @param collapsed
   *  Info on if the player is collapsed.
   */
  playerCollapseToggle(collapsed) {
    this.playerCollapsed = collapsed;
  }
}
