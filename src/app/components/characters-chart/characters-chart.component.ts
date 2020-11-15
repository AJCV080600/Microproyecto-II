import { Component, OnInit } from '@angular/core';
import { APIResponse } from 'src/app/models/apiresponse';
import { Character } from 'src/app/models/character';
import { APIRequestService } from 'src/app/services/apirequest.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-characters-chart',
  templateUrl: './characters-chart.component.html',
  styleUrls: ['./characters-chart.component.scss']
})
export class CharactersChartComponent implements OnInit {
  page: APIResponse;
  characters: Array<Character> = [];
  isAuthenticated: boolean;

  constructor(private api: APIRequestService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getPage('https://rickandmortyapi.com/api/character');
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  getPage(pageURL: string) {
    this.api.getPage(pageURL).then((response) => {
      this.page = response.data;
      this.characters = response.data.results;
    }).catch((err) => {console.log(err)});
  }

  getNextPage(actualPage: APIResponse) {
    this.api.getNextPage(actualPage).then((response) => {
      this.page = response.data;
      this.characters = response.data.results;
    }).catch((err) => {console.log(err)});
  }

  getPrevPage(actualPage: APIResponse) {
    this.api.getPrevPage(actualPage).then((response) => {
      this.page = response.data;
      this.characters = response.data.results;
    }).catch((err) => {console.log(err)});
  }

}
