import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})

export class HeaderComponent {
  toggleMenu(): void {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
      if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
    }
    }
  }

  closeMenu(): void {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
      mobileNav.style.display = 'none';
    }
}
}
