import { Component, OnInit, Injectable, Input } from "@angular/core";

@Component({
    selector: 'ng-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {
    @Input() description = '';
    @Input() url = '';
}