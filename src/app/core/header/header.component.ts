import { Component, Input } from "@angular/core";

@Component({
    selector: 'gp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
    @Input() userName: string;
}