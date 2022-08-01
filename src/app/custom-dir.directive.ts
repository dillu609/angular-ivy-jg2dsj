import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color ="green";
    el.nativeElement.style.fontWeight ="bold";
    el.nativeElement.style.textTransform ="uppercase";
   }

}