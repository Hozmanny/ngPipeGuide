import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [NumbersComponent, NoCommonComponent, BasicsComponent, SortComponent],
  imports: [
    CommonModule, PrimeNgModule
  ],
  exports: [NumbersComponent, NoCommonComponent, BasicsComponent, SortComponent]
})
export class SalesModule { }
