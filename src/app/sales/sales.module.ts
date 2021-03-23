import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayuscula.pipe';
import { realPowerPipe } from './pipes/realPower.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [NumbersComponent, NoCommonComponent, BasicsComponent, SortComponent, MayusculasPipe, realPowerPipe, SortPipe],
  imports: [
    CommonModule, PrimeNgModule
  ],
  exports: [NumbersComponent, NoCommonComponent, BasicsComponent, SortComponent]
})
export class SalesModule { }
