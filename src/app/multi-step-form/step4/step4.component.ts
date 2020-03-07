import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }
  dealData = {};
  contactData = {};
  token;
  client_id = '8ae47453457368260eefdc7a06cd553b';
  client_secret = "4710a2f3bc6c5cdbf4d1d4f9d306aaf6";
  redirect_uri = `http://localhost:4200/`;
  grant_type = "authorization_code";

  option = {};
  @Input() regForm: FormGroup;
  ngOnInit(): void {
  }

  OnSend() {

    const body = {
      "client_id": this.client_id,
      "client_secret": this.client_secret,
      "redirect_uri": this.redirect_uri,
      "code": JSON.parse(localStorage.getItem('code')),
      "grant_type": this.grant_type,
    };
    this.httpClient.post(`https://app.teamleader.eu/oauth2/access_token`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(res => {
      console.log('res: ', res);
    }, error => {
      console.log(error);
    })

    // let header = new HttpHeaders()
    //   .set('Content-Type', 'application/json');

    // this.apiService.post('oauth2/access_token', body).subscribe(result => {
    //   console.log(result);
    // }, error => {
    //   console.log(error);
    // });

    this.dealData = this.regForm.value.caseDetails;
    this.contactData = {
      "first_name": this.regForm.value.contactDetails.firstname,
      "last_name": this.regForm.value.contactDetails.lastname,
      "emails": [
        {
          "type": "primary",
          "email": this.regForm.value.contactDetails.email
        }
      ],
      "telephones": [
        {
          "type": "phone",
          "number": this.regForm.value.contactDetails.phone
        }
      ],
      "addresses": [
        {
          "type": "invoicing",
          "address": {
            "addressee": this.regForm.value.contactDetails.address,
            "postal_code": this.regForm.value.contactDetails.zipcode,
            "city": this.regForm.value.contactDetails.city
          }
        }
      ],
      "custom_fields": [
        {
          "housenr": this.regForm.value.contactDetails.housenr,
        }
      ]
    }


    this.option = {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      }
    }

    // this.apiService.post("https://api.teamleader.eu/contacts.add", this.contactData, this.option).subscribe(res => {
    //   console.log(res);
    // })
  }
}
