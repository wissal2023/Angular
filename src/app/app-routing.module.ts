import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { AppartmentsComponent } from './appartments/appartments.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{path:'',redirectTo:'Resid', pathMatch:'full'},
                        {path:'Resid', component:ResidencesComponent},
                        {path:'addResid', component:FormResidenceComponent}, 
                        {path:'detailsResid/:param', component:AppartmentsComponent},
                        {path:'addAppartment/:id', component:FormAppartmentComponent},
                        {path:'detailsApp/:id', component:DetailsComponent},
                        {path:'**', component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
