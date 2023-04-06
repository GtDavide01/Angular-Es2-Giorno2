import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-table-dialog-component',
  templateUrl: './table-dialog-component.component.html',
  styleUrls: ['./table-dialog-component.component.scss']
})
export class TableDialogComponentComponent {
  constructor(public dialogRef: MatDialogRef<TableDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){

    }
    stampaCon(id: number ) :void{
      console.log(this.data[id].nome , this.data[id].cognome);
      this.dialogRef.close();
    }

    onNoClick():void{
      this.dialogRef.close();
    }
}
