import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import { ExceptionService, SpinnerService } from '../blocks/blocks';
import { MessageService } from '../shared/shared';

let fishinglogsUrl = "http://localhost:3050/fishinglogs";

export interface Fishinglog {
  id: number;
  place_name: string;
  location: string;
  species: string;
  trip_date: Date;
  weather: string;
  result: string;
  comments: string;
}

@Injectable()
export class FishinglogService {

  constructor(private _http: Http,
    private _exceptionService: ExceptionService,
    private _messageService: MessageService,
    private _spinnerService: SpinnerService) {
    this._messageService.state.subscribe(state => this.getFishinglogs());
  };

  addFishinglog(fishinglog: Fishinglog) {
    let body = JSON.stringify(fishinglog);
    this._spinnerService.show();
    return this._http
      .post(`${fishinglogsUrl}`, body)
      .map(res => res.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getFishinglogs() {
    this._spinnerService.show();
    return this._http.get(fishinglogsUrl)
      .map((response: Response) => <Fishinglog[]>response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getFishinglog(id: number) {
    this._spinnerService.show();
    return this._http.get(`${fishinglogsUrl}/${id}`)
      .map((response: Response) => response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  updateFishinglog(fishinglog: Fishinglog) {
    let body = JSON.stringify(fishinglog);
    this._spinnerService.show();

    return this._http
      .put(`${fishinglogsUrl}/${fishinglog.id}`, body)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  deleteFishinglog(fishinglog: Fishinglog) {
    this._spinnerService.show();
    return this._http
      .delete(`${fishinglogsUrl}/${fishinglog.id}`)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  onDbReset = this._messageService.state;
}