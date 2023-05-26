import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent  implements OnInit {
  ngOnInit() {
    const sr = ScrollReveal({
      distance: '140px',
      duration: 2600,
      delay: 150,
      reset: true,
    });

    sr.reveal('.about-text', { delay: 200, origin: 'right' });
    sr.reveal('.about-img', { delay: 200, origin: 'left' });
  }
}
