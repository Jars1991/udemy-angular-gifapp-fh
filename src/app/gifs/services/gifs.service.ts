import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _searchHistory: string[] = [];

  private _API_KEY = 'qg8MHYLy7gB3gwMhNlJI76T6rMQEWNiL';
  private _API_URL = 'https://api.giphy.com/v1/gifs/search';
  private _PAGINATION_LIMIT = 10;

  get searchHistory() {
    return [...this._searchHistory];
  }

  constructor(private _HttpClient: HttpClient) { }

  search(query: string) {
    query = query.trim().toLowerCase();

    if(query && !this._searchHistory.includes(query)){
      this._searchHistory.unshift(query);
      this._searchHistory = this._searchHistory.slice(0, 10);
      console.log(this._searchHistory);
    };

    const _params = {q: query, api_key: this._API_KEY, limit: `${this._PAGINATION_LIMIT}`};

    this._HttpClient.get(this._API_URL, {params: _params})
      .subscribe((response: any) => {
        console.log(response.data);
      })
  }

}
