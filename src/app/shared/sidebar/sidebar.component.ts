import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get searchHistory() {
    return this.GifsService.searchHistory;
  }

  constructor(private GifsService: GifsService) { }

  search(history: string) {
    this.GifsService.search(history);
  }
}
