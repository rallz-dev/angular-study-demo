import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubLevelRoutingModule } from './sub-level-routing.module';
import { SubLevelComponent } from './sub-level.component';
import { SharedModule } from 'src/app/shared-module/shared.module';


@NgModule({
  declarations: [
    SubLevelComponent,
  ],
  imports: [
    CommonModule,
    SubLevelRoutingModule,
    SharedModule
  ]
})
export class SubLevelModule { }
