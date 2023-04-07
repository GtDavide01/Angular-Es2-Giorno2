import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit{

  homeform: FormGroup


  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null , [Validators.required , Validators.maxLength(30)]),
      cognome: new FormControl(null , [Validators.required, Validators.maxLength(50)]),
      dataNascita: new FormControl( [Validators.required , Validators]),
      codiceFiscale: new FormControl(null , Validators.required),
      sesso: new FormControl(null , Validators.required)
    })
  }

  onSubmit() :void {

  }
}
