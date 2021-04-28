import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _searchHistory: string[] = [];

  get searchHistory() {
    return [...this._searchHistory];
  }

  search(query: string) {
    query = query.trim().toLowerCase();

    if(query && !this._searchHistory.includes(query)){
      this._searchHistory.unshift(query);
      this._searchHistory = this._searchHistory.slice(0, 10);
      console.log(this._searchHistory);
    };
  }

  constructor() { }
}
