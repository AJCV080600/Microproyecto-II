import { Injectable } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { APIResponse } from '../models/apiresponse';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class APIRequestService {

  constructor() { }

  getPage(pageURL: string): Promise<AxiosResponse<APIResponse>> {
    return Axios.get(pageURL);
  }

  getNextPage(response: APIResponse): Promise<AxiosResponse<APIResponse>> {
    if (response.info.next != null) {
      return Axios.get(response.info.next);
    }
    return Axios.get('https://rickandmortyapi.com/api/character');
  }

  getPrevPage(response: APIResponse): Promise<AxiosResponse<APIResponse>> {
    if (response.info.prev != null) {
      return Axios.get(response.info.prev);
    }
    return Axios.get(`https://rickandmortyapi.com/api/character/?page=${response.info.pages}`);
  }

  getCharacterByID(charID: string): Promise<AxiosResponse<Character>> {
    return Axios.get(`https://rickandmortyapi.com/api/character/${charID}`);
  }
}
