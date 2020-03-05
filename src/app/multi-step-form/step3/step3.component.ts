import { Component,Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  constructor() { }
  @Input()  regForm: FormGroup;
  ngOnInit(): void {
    
  }
  result(){
    console.log(this.regForm)
  }
}
