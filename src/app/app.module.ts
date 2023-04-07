import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TableDialogComponentComponent } from './table-dialog-component/table-dialog-component.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableDialogComponentComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
