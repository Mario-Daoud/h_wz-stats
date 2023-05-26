import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wz-stats';

  scrolled: boolean = false;

  toggleMenu(): void {
    const navlist = document.querySelector('.navlist');
    const menuIcon = document.querySelector('#menu-icon');

    if (navlist && menuIcon) {
      navlist.classList.toggle('open');
      menuIcon.classList.toggle('bx-x');
    }
  }

  @HostListener('window:scroll', ['window:scroll'])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 0;
  }

  scrollToComponent(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
