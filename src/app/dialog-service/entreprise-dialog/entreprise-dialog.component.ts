import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { AlternantElement } from '../../model/alternant-element';

@Component({
    selector: 'entreprise-dialog',
    templateUrl: './entreprise-dialog.html',
})
export class EntrepriseDialog {
 
    public alternant: AlternantElement;

    constructor(public dialogRef: MatDialogRef<EntrepriseDialog>) {
    }
    
    ngOnInit(): void {
    };
}