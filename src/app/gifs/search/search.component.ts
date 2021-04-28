import { Component, ViewChild, ElementRef } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  @ViewChild("searchInput") searchInput!: ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) { }

  search() {
    let value = this.searchInput.nativeElement.value;
    this.GifsService.search(value);
    console.log(value);
    this.searchInput.nativeElement.value = '';
  }

}
