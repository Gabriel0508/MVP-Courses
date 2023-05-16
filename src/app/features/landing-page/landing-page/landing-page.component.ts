import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  /**
   * Method to navigate to a specific component
   * @param url
   */
  onNavigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
