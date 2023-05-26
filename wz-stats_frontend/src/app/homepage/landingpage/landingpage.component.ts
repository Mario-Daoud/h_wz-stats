import { Component, OnInit, ElementRef } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {
  ngOnInit() {
    const sr = ScrollReveal({
      distance: '65px',
      duration: 2600,
      delay: 250,
      reset: true,
    });

    sr.reveal('.hero-text', { delay: 200, origin: 'top' });
    sr.reveal('.hero-img', { delay: 450, origin: 'top' });
    sr.reveal('.icons', { delay: 500, origin: 'left' });
    sr.reveal('.scroll-down', { delay: 500, origin: 'right' });
  }

  constructor(private elementRef: ElementRef) {}

  scrollDown() {
    window.scrollTo({
      top: this.elementRef.nativeElement.offsetHeight,
      behavior: 'smooth',
    });
  }
}
