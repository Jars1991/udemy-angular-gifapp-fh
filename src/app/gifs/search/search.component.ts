import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  @ViewChild("searchInput") searchInput!: ElementRef<HTMLInputElement>;

  constructor() { }

  search() {
    console.log(this.searchInput.nativeElement.value);
    this.searchInput.nativeElement.value = '';
  }

}
