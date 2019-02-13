import { Component, Input } from "@angular/core";

@Component({
    selector: 'gp-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent {

    @Input() text = '';
}