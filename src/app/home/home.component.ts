import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Uw zaak melden bij Anti Incasso';
  subTitle = 'Raakt u betrokken bij een juridische zaak?\n';
  registrationForm: FormGroup;
  isEditable = false;

  client_id = '8ae47453457368260eefdc7a06cd553b';
  response_type = 'code';
  redirect_uri = `http://localhost:4200/`;
  constructor(
    private router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.route.params.subscribe(res => {
    //   if (res['code']) {
    //     const code = res['code'];
    //   }
    //   console.log('router param: ', res);
    // })
    // const body = {
    //   client_id: this.client_id,
    //   client_secret: this.client_secret,
    //   redirect_uri: this.redirect_uri,
    //   code: this.code,
    //   grant_type: this.grant_type,
    // };
    // this.apiService.post('https://app.teamleader.eu/oauth2/access_token', body)
    //   .subscribe(res => {
    //     console.log('res: ', res);
    //   })

    this.registrationForm = this._formBuilder.group({
      'startRegistration': new FormGroup({
        'typeOfCase': new FormControl(null, Validators.required),
      }),
      'caseDetails': this._formBuilder.group({
        // 'withToLaw': new FormControl(null),
        'withToLaw': [null],
        'vonnis': [null],
        'totalClaimPrice': [null],
        'dossiernummer': [null],
        'oplossingen': [null],
        'gemaakteFouten': [null],
        'seCompany': [null],
        'seName': [null],
        'seAddress': [null],
        'seHousenr': [null],
        'seZipcode': [null],
        'seCity': [null],
        'seEmail': [null],
        'sePhone': [null],
      }),
      'contactDetails': this._formBuilder.group({
        'firstname': [null],
        'lastname': [null],
        'address': [null],
        'housenr': [null],
        'zipcode': [null],
        'city': [null],
        // 'email': new FormControl(null, [Validators.required, Validators.email]),
        'email': [null],
        'phone': [null],
      }),

    });

    // if (this.router.url.includes('code')) {
    //   const code = this.router.url.slice(7);
    //   localStorage.setItem('code', JSON.stringify(code));
    // }
  }

  submitForm() {
    console.log('submit' + this.registrationForm)
  }

  // getCode() {
  //   window.location.href = `https://app.teamleader.eu/oauth2/authorize?client_id=${this.client_id}&response_type=${this.response_type}&redirect_uri=${this.redirect_uri}`;

  // }
}

