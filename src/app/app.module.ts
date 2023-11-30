import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { AppartmentsComponent } from './appartments/appartments.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    FormResidenceComponent,
    AppartmentsComponent,
    FormAppartmentComponent,
    NotFoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
