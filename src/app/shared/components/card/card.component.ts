import { Input, Component } from "@angular/core";

@Component({
    selector: 'gp-card',
    templateUrl: './card.component.html'
})
export class CardComponent {
    @Input() title: string = '';
}