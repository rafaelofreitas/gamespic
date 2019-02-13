import { Component, Input } from "@angular/core";
import { UserService } from "../user/user.service";
import { Observable } from "rxjs";
import { User } from "../user/user";

@Component({
    selector: 'gp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    user$: Observable<User>;
    user: User;

    constructor(userService: UserService) {
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }
}