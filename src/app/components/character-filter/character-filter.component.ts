import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {
  filter = '';
  filterForm: FormGroup
  
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createFilter();
  }

  createFilter(): void {
    this.filterForm = this.fb.group(
      {
        name : [''],
        status: [''],
        species : [''],
        type: [''],
        gender: ['']
      }
    );
  }
  
  onSubmit(): void {
    var filterRoute: string = 'characters/filter/';
    var hasName = this.filterForm.get('name').value.trim() != '';
    var hasStatus = this.filterForm.get('status').value.trim() != '';
    var hasSpecies = this.filterForm.get('species').value.trim() != '';
    var hasType = this.filterForm.get('type').value.trim() != '';
    var hasGender = this.filterForm.get('gender').value.trim() != '';
    if (hasName || hasStatus || hasSpecies || hasType || hasGender) {
      filterRoute = filterRoute + '?'
      if (hasName) {
        filterRoute = filterRoute + 'name=' + this.filterForm.get('name').value.trim() + '&';
      }
      if (hasStatus) {
        filterRoute = filterRoute + 'status=' + this.filterForm.get('status').value.trim() + '&';
      }
      if (hasSpecies) {
        filterRoute = filterRoute + 'species=' + this.filterForm.get('species').value.trim() + '&';
      }
      if (hasType) {
        filterRoute = filterRoute + 'type=' + this.filterForm.get('type').value.trim() + '&';
      }
      if (hasGender) {
        filterRoute = filterRoute + 'gender=' + this.filterForm.get('gender').value.trim() + '&';
      }
      this.router.navigate([filterRoute]);
    }
    else {
      filterRoute = 'characters/filter/';
      this.router.navigate([filterRoute]);
    }
  }
}
