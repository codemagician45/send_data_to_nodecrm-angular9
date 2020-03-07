import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
// import { resolve } from 'dns';
// import { rejects } from 'assert';
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

  contactData = new FormData();
  dealData = new FormData();
  // tokenObj;
  // response;
  // client_id = '8ae47453457368260eefdc7a06cd553b';
  // client_secret = "4710a2f3bc6c5cdbf4d1d4f9d306aaf6";
  // redirect_uri = `http://localhost:4200/`;
  // grant_type = "authorization_code";

  // option = {};
  api_group = "156919";
  api_secret = "rjiyaupq2kmAow3uBTSOA8LWkQWtV61lD4AkDV1SPRqFz1T2nAWBQDYP2EobYtyWgsMN9owlQbgbdhcnmIot4egLSc7OofKfteVyI3Yd4WqX17skQtZ2BFx1d4i5Eikze9INPnZgbRBg4vwC3awL64364WwLPPKuuQgK62KQ4i6JJzjbhW8dDCodYJxwcMbFlLMueCQz";
  @Input() regForm: FormGroup;
  ngOnInit(): void {

  }



  // OnSend() {

  //   this.contactData = {
  //     "first_name": this.regForm.value.contactDetails.firstname,
  //     "last_name": this.regForm.value.contactDetails.lastname,
  //     // "emails": [
  //     //   {
  //     //     "type": "primary",
  //     //     "email": this.regForm.value.contactDetails.email
  //     //   }
  //     // ],
  //     // "telephones": [
  //     //   {
  //     //     "type": "phone",
  //     //     "number": this.regForm.value.contactDetails.phone
  //     //   }
  //     // ],
  //     // "addresses": [
  //     //   {
  //     //     "type": "invoicing",
  //     //     "address": {
  //     //       "addressee": this.regForm.value.contactDetails.address,
  //     //       "postal_code": this.regForm.value.contactDetails.zipcode,
  //     //       "city": this.regForm.value.contactDetails.city
  //     //     }
  //     //   }
  //     // ],
  //     // "custom_fields": [
  //     //   {
  //     //     "housenr": this.regForm.value.contactDetails.housenr,
  //     //   }
  //     // ]
  //   }

  //   const body = {
  //     "client_id": this.client_id,
  //     "client_secret": this.client_secret,
  //     "redirect_uri": this.redirect_uri,
  //     "code": JSON.parse(localStorage.getItem('code')),
  //     "grant_type": this.grant_type,
  //   };

  //   this.httpClient.post(`/oauth2/access_token`, body, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).subscribe((res: any) => {

  //     this.tokenObj = res.access_token;
  //     console.log(this.tokenObj)
  //     this.option = {
  //       headers: {
  //         'Authorization': `Bearer ${this.tokenObj}`,
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //     console.log(this.option)
  //     this.apiService.post("https://api.teamleader.eu/contacts.add", this.contactData, this.option).subscribe(res => {
  //       console.log(res);
  //     })

  //   }, (error: any) => {
  //     console.log(error);
  //   })

  //   this.dealData = this.regForm.value.caseDetails;

  //   // console.log(this.tokenObj)


  //   // this.option = {
  //   //   headers: {
  //   //     'Authorization': `Bearer ${this.tokenObj.access_token}`,
  //   //     'Content-Type': 'application/json'
  //   //   }
  //   // }
  //   // console.log(this.tokenObj);
  //   // this.apiService.post("https://api.teamleader.eu/contacts.add", this.contactData, this.option).subscribe(res => {
  //   //   console.log(res);
  //   // })
  // }

  OnSend() {

    this.contactData.append("api_group", this.api_group);
    this.contactData.append("api_secret", this.api_secret);
    this.contactData.append("forename", this.regForm.value.contactDetails.firstname);
    this.contactData.append("surname", this.regForm.value.contactDetails.lastname);
    this.contactData.append("email", this.regForm.value.contactDetails.email);
    this.contactData.append("telephone", this.regForm.value.contactDetails.phone);
    this.contactData.append("zipcode", this.regForm.value.contactDetails.zipcode);
    this.contactData.append("city", this.regForm.value.contactDetails.city);
    this.contactData.append("street", this.regForm.value.contactDetails.address);
    this.contactData.append("number", this.regForm.value.contactDetails.housenr);

    this.apiService.post("/api/addContact.php", this.contactData).subscribe(contactId => {
      alert("Contact Added Successfully: ID:" + JSON.stringify(contactId));
      this.dealData.append("api_group", this.api_group);
      this.dealData.append("api_secret", this.api_secret);
      this.dealData.append("title", "Incassogeschil");
      this.dealData.append("source", "antiincasso");
      this.dealData.append("contact_or_company", "contact");
      this.dealData.append("contact_or_company_id", JSON.stringify(contactId));
      this.dealData.append("custom_field_336945", this.regForm.value.startRegistration.typeOfCase);
      this.dealData.append("custom_field_336946", this.regForm.value.caseDetails.withToLaw);
      this.dealData.append("custom_field_336947", this.regForm.value.caseDetails.vonnis);
      this.dealData.append("custom_field_336948", this.regForm.value.caseDetails.totalClaimPrice);
      this.dealData.append("custom_field_336949", this.regForm.value.caseDetails.dossiernummer);
      this.dealData.append("custom_field_336950", this.regForm.value.caseDetails.oplossingen);
      this.dealData.append("custom_field_336951", this.regForm.value.caseDetails.gemaakteFouten);
      this.dealData.append("custom_field_336952", this.regForm.value.caseDetails.seCompany);
      this.dealData.append("custom_field_336955", this.regForm.value.caseDetails.seName);
      this.dealData.append("custom_field_336956", this.regForm.value.caseDetails.seAddress);
      this.dealData.append("custom_field_336957", this.regForm.value.caseDetails.seHousenr);
      this.dealData.append("custom_field_336958", this.regForm.value.caseDetails.seZipcode);
      this.dealData.append("custom_field_336959", this.regForm.value.caseDetails.seCity);
      this.dealData.append("custom_field_336960", this.regForm.value.caseDetails.seEmail);
      this.dealData.append("custom_field_336961", this.regForm.value.caseDetails.sePhone);

      this.apiService.post("/api/addDeal.php", this.dealData).subscribe(dealId => {
        alert("Deal Added Successfully: ID:" + JSON.stringify(dealId));
      });


    }), (error => console.log(error));
  }
}
