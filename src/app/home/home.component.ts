import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Uw zaak melden bij Anti Incasso';
  subTitle = 'Raakt u betrokken bij een juridische zaak?\n';
  registrationForm: FormGroup;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  isEditable = false;

  constructor( private _formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });

    this.registrationForm = this._formBuilder.group({
      'startRegistration': new FormGroup({
        'typeOfCase': new FormControl(null, Validators.required),
      }),
      'caseDetails': this._formBuilder.group({
        // 'withToLaw': new FormControl(null),
        'withToLaw': [''],
        'vonnis': new FormControl(null),
        'totalClaimPrice': new FormControl(null),
        'dossiernummer': new FormControl(null),
        'oplossingen': new FormControl(null),
        'gemaakteFouten': new FormControl(null),
        'seCompany': new FormControl(null),
        'seName': new FormControl(null),
        'seAddress': new FormControl(null),
        'seHousenr': new FormControl(null),
        'seZipcode': new FormControl(null),
        'seCity': new FormControl(null),
        'seEmail': new FormControl(null),
        'sePhone': new FormControl(null),
      }),
      'contactDetails': this._formBuilder.group({
        'firstname': new FormControl(null),
        'lastname': new FormControl(null),
        'address': new FormControl(null),
        'housenr': new FormControl(null),
        'zipcode': new FormControl(null),
        'city': new FormControl(null),
        // 'email': new FormControl(null, [Validators.required, Validators.email]),
        'email': new FormControl(null),
        'phone': new FormControl(null),
      }),

    });
  }

  submitForm() {
    console.log('submit' + this.registrationForm)
  }
}

