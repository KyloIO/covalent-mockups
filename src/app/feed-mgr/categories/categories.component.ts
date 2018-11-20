import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'qs-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent {

    apps: any = [];

    constructor(private http: HttpClient) {
        console.log("Inside");
    }

    ngOnInit() {
        this.getCategories().subscribe(data => {
            this.apps = data;
            console.log(data);
        });
    }

    getCategories(): Observable<any> {
        return this.http.get("data/categories.json");
    }

}