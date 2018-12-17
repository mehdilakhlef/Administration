import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

// Données pour les promotions
import { PROMOTIONS } from '../mock';

@Component({
  selector: 'app-livret',
  templateUrl: './livret.component.html',
  styleUrls: ['./livret.component.scss']
})
export class LivretComponent implements OnInit {

  displayedColumns: string[] = ['classe', 'annee', "action"];
  dataSourceClasse = new MatTableDataSource(PROMOTIONS);

  applyFilter(filterValue: string) {
    this.dataSourceClasse.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
