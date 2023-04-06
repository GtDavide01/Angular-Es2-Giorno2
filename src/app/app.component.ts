import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TableDialogComponentComponent } from './table-dialog-component/table-dialog-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public dialog: MatDialog) {}

  tableData = [
    {id: 1 , nome: 'Mario' , cognome:'Rossi'},
    {id: 2 , nome: 'Luigi' , cognome:'Neri'},
    {id: 3 , nome: 'Maria' , cognome:'Bianchi'},
    {id: 4 , nome: 'Luca' , cognome:'Gialli'},
    {id: 5 , nome: 'Franco' , cognome:'Verdi'},
    {id: 6 , nome: 'Giuseppe' , cognome:'Violi'},
    {id: 7 , nome: 'Lorenzo' , cognome:'Rosi'},
    {id: 8 , nome: 'Francesco' , cognome:'Azzurri'},
  ]
  openDialog() : void {
    const dialogRef = this.dialog.open(TableDialogComponentComponent , {
      width: '600px',
      data: this.tableData
    });
    // this.dialog.open(DialogElementsExampleDialog , {
    //   data: this.tableData
    // });
  }
  // title = 'Angular-Es2-Giorno2';
  // persona = {
  //   nome: 'Luca',
  //   cognome: 'Rossi',
  //   dataDiNascita: new Date(1980 , 9, 9),
  //   orarioDiNascita: '10:30'
  // }

  // getEta(persona: any){
  //   const  now = new Date()
  //   const dataDiNascita: Date = persona.dataDiNascita;
  //   const oraDiNascita: string = persona.oraDiNascita;

  //   //calcolo degli anni
  //   let anni = now.getFullYear() - dataDiNascita.getFullYear();
  //   const meseDiNascita: number = dataDiNascita.getMonth();
  //   const giornoDiNascita: number = dataDiNascita.getDate();

  //   if(now.getMonth() < meseDiNascita || (now.getMonth() === meseDiNascita && now.getDate())){
  //     anni --;
  //   }

  //   console.log(`Età in anni è:  ${anni}`)

  //   //calcolo età in minuti
  //   const diffMinuti: number = now.getTime() - dataDiNascita.getTime();
  //   const minuti: number = diffMinuti/ (1000*60);

  //   console.log(`Età in minuti è : ${minuti}`)

  //   //calcolo in ore
  //   const ore = minuti / 60 ;
  //   console.log(`Età in ore : ${ore.toFixed(2)}`)


  // }
  ngOnInit(): void {
  //  console.log(this.getEta(this.persona));
  }
  onClick(): void{
    console.log('ciaooo')
  }
}




