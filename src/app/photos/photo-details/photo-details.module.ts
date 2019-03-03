import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PhotoDetailComponent } from "./photo-details.component";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [
        PhotoDetailComponent,
        PhotoCommentsComponent
    ],
    exports: [
        PhotoDetailComponent,
        PhotoCommentsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PhotoModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class PhotoDetailsModule { }