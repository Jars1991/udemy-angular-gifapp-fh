import { Component } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  get searchResults() {
    return this.GifsService.searchResults;
  }

   get_image_url(result: any) {
    return result.images.downsized_medium.url;
  }

  constructor(private GifsService: GifsService) { }
}
