import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';


import { Step1Component } from '../multi-step-form/step1/step1.component';
import { Step2Component } from '../multi-step-form/step2/step2.component';
import { Step3Component } from '../multi-step-form/step3/step3.component';
import { Step4Component } from '../multi-step-form/step4/step4.component';

@NgModule({
  declarations: [
    HomeComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatStepperModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
  ]
})
export class HomeModule { }
