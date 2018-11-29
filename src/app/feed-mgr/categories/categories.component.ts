import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
    selector: 'qs-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent {

    apps: any = [];
    favorites: any = [];

    LOCAL_STORAGE_KEY = "KYLO_FAVORITE_CATEGORIES";

    constructor(private http: HttpClient,
                private localStorageService: LocalStorageService) {
    }

    ngOnInit() {
        this.loadData(true);
    }

    loadData(loadFavorites: boolean) {

        if (loadFavorites) {
            let localStorageItems = this.localStorageService.getItem(this.LOCAL_STORAGE_KEY) ? this.localStorageService.getItem(this.LOCAL_STORAGE_KEY) : [];
            let keys = Object.keys(localStorageItems);
            for (const key of keys) {
                this.favorites.push(localStorageItems[key]);
            }
            console.log(this.favorites);
        }

        this.getCategories().subscribe(data => {
            this.apps = [];
            data.forEach(element => {
                if(this.favorites.length == 0 || !this.favorites.map(favorite=>{return favorite.name}).includes(element.name)) {
                    this.apps.push(element);
                }
            });
        });
    }

    getCategories(): any {
        return this.http.get("data/categories.json");
    }

    makeFavorite(template:any) {

        this.favorites.push(template);
        this.localStorageService.setItem(this.LOCAL_STORAGE_KEY, this.favorites);
        this.loadData(false);
    }

    removeFavorite(index: number) {
        this.favorites.splice(index, 1);
        this.localStorageService.setItem(this.LOCAL_STORAGE_KEY, this.favorites);
        this.loadData(false);
    }

}