import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>) {
    }

    ngOnInit(): void {
        this.element.nativeElement.click();
    }
}
