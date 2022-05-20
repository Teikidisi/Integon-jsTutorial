import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import {PermissionDirective} from './directives/permission.directive'
import {NumericDirective} from './directives/numeric.directive'
import {CopyrightDirective} from './directives/copyright.directive'


@NgModule({
  declarations: [
    SortPipe,
    PermissionDirective,
    NumericDirective,
    CopyrightDirective],
  imports: [
    CommonModule
  ], exports: [
    SortPipe,
    PermissionDirective,
    NumericDirective,
    CopyrightDirective
  ],providers: [
  ],
  bootstrap: [
  ]
})
export class SharedModule { }
