import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../servizi/firebase.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit{

  homeform: FormGroup
  cognome: any;

  constructor(private firebase: FirebaseService){}

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null , [Validators.required , Validators.maxLength(30)]),
      cognome: new FormControl(null , [Validators.required, Validators.maxLength(50)]),
      dataNascita: new FormControl( [Validators.required , Validators]),
      codiceFiscale: new FormControl(null , Validators.required),
      sesso: new FormControl(null , Validators.required)
    })
  }

  onSubmit()  {
    this.firebase.insert(
      'https://corso-angular-203c5-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
      {
       nome: this.homeform.value.nome ,
       cognome: this.homeform.value.cognome,
       dataNascita: this.homeform.value.dataNascita,
       codiceFiscale: this.homeform.value.codiceFiscale,
       sesso: this.homeform.value.sesso
      }
    ).subscribe(data =>{
      console.log(data)
    });
  }
}
