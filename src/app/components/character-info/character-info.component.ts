import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { APIRequestService } from 'src/app/services/apirequest.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  id = '';
  char: Character;

  constructor(private api: APIRequestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getURL();
  }
  
  getURL(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.api.getCharacterByID(this.id).then((response) => {
          this.char = response.data;
        }).catch((err) => {console.log(err)})
      }
    });
  }
}
