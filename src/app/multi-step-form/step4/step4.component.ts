import { Component,Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  constructor(private apiService:ApiService) { }
  @Input() regForm : FormGroup;
  ngOnInit(): void {
    this.apiService.get('https://api.quickbutik.com/v1/products?apiKey=6015817645').subscribe((res)=>{
      console.log(res);
    })
  }

}
