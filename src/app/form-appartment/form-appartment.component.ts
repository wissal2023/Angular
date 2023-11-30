import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-appartment.component.html',
  styleUrls: ['./form-appartment.component.css']
})
export class FormAppartmentComponent {

  apartForm=new FormGroup({
    id:new FormControl(''),
    appartNum: new FormControl('', [Validators.required, Validators.min(1) ] ),
    floorNum: new FormControl('', [Validators.required, ]),
    surface: new FormControl('', Validators.required),
    terrace: new FormControl('', Validators.required),
    surfaceTerrace: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    residence: new FormControl('')
  });
//to put the id residence in the textbox of residene
  id!:any
  constructor(private actR:ActivatedRoute){}
    ngOnInit(){      
      this.id= Number(this.actR.snapshot.paramMap.get('id'));  // take the id from teh url    
      this.apartForm.patchValue({residence:this.id});// put the id in the url in the residence area
    }


    get appartNum(){
      return this. apartForm.get('appartNum');
    }

}
