import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GiphySearchResponse, Data } from './../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _searchHistory: string[] = [];
  public searchResults: Data[] = [];

  private _API_KEY = 'qg8MHYLy7gB3gwMhNlJI76T6rMQEWNiL';
  private _API_URL = 'https://api.giphy.com/v1/gifs';
  private _PAGINATION_LIMIT = 10;

  get searchHistory() {
    return [...this._searchHistory];
  }

  constructor(private _HttpClient: HttpClient) {
    this._searchHistory = JSON.parse(localStorage.getItem('gifs_app_searchHistory')!) || [];

    this.searchResults = JSON.parse(localStorage.getItem('gifs_app_searchResults')!) || [];
   }

  search(query: string) {
    query = query.trim().toLowerCase();

    if(query && !this._searchHistory.includes(query)){
      this._searchHistory.unshift(query);
      this._searchHistory = this._searchHistory.slice(0, 10);
      console.log(this._searchHistory);

      localStorage.setItem('gifs_app_searchHistory', JSON.stringify(this._searchHistory));
    };

    const params = new HttpParams()
      .set('q', query)
      .set('api_key', this._API_KEY)
      .set('limit', `${this._PAGINATION_LIMIT}`);

    this._HttpClient.get<GiphySearchResponse>(`${this._API_URL}/search`, {params})
      .subscribe((response) => {
        console.log(response.data);
        this.searchResults = response.data;

        localStorage.setItem('gifs_app_searchResults', JSON.stringify(this.searchResults));
      })
  }

}
