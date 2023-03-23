import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  
  activePage!: string;

  pageClick(clickElement: string): string {
    return (this.activePage = clickElement);
  }
}
