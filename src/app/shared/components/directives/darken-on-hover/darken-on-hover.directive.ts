import { Directive, ElementRef, HostListener, Renderer } from "@angular/core";

@Directive({
    selector: '[gpDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    constructor(
        private el: ElementRef,
        private render: Renderer) {
    }

    @HostListener('mouseover')
    darkenOn() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
    }

    @HostListener('mouseleave')
    darkenOf() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}