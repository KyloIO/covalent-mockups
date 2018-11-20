import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'qs-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent {

    constructor() {
        console.log("Inside");
    }
    ngOnInit() {

    }

}