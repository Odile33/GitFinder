import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private light:ElementRef) { }
  @HostListener("mouseenter") onMouseEnter(){
    this.lightup("rgba(255,215,0, 0.1)");
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.lightup(null);
  }
  private lightup(color:string){
    this.light.nativeElement.style.backgroundColor= color;
  }

}