import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { AlternantElement } from '../../model/alternant-element';

@Component({
    selector: 'alternant-dialog',
    templateUrl: './alternant-dialog.html',
})
export class AlternantDialog {
 
    public alternant: AlternantElement;

    constructor(public dialogRef: MatDialogRef<AlternantDialog>) {
    }
    
    ngOnInit(): void {
    };
}