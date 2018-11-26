import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'qs-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent {

    apps: any = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.getCategories().subscribe(data => {
            this.apps = data;
        });
    }

    getCategories(): any {
        return this.http.get("data/categories.json");
    }

}