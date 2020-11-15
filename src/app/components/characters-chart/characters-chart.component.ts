import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  url: string = 'https://rickandmortyapi.com/api/character/';
  filterURL: string;

  constructor(private api: APIRequestService, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFilterURL();
    this.getPage(this.url);
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  getPage(pageURL: string) {
    this.api.getPage(pageURL).then((response) => {
      this.page = response.data;
      this.characters = response.data.results;
    }).catch((err) => {console.log(err)
    this.router.navigate(['characters'])
    alert('No results match your search criteria')});
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

  getFilterURL(): void {
    this.route.paramMap.subscribe((params) => {
      this.filterURL = params.get('filter');
      if (this.filterURL) {
        this.url = this.url + this.filterURL;
      }
    })
  }
}
