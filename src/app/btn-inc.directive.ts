import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnInc]'
})
export class BtnIncDirective {

  constructor() { }

  // (click)="inc($event.target)"
  @HostListener('click', ['$event.target'])
  inc(btn: HTMLButtonElement) {
    let num = parseInt(btn.innerText);
    num++;
    btn.innerText = num.toString();
  }
}
