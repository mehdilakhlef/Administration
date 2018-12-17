import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

// Données pour les demandes
import { DEMANDES } from '../mock';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['INE', 'nom', 'prenom', 'classe', 'dateDemande', "action"];
  dataSource = new MatTableDataSource(DEMANDES);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
