import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Dir } from '@angular/cdk/bidi';
import { MatIconRegistry } from '@angular/material/icon';
import { TdMediaService } from '@covalent/core/media';


@Component({
  selector: 'qs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {

  searchQuery : string = null;

  constructor(private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer,
              public media: TdMediaService) {

    // Register svgs
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-stroke',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-stroke.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-outline.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'angular',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'angular-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular-outline.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'material-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'));
      this._iconRegistry.addSvgIconInNamespace('assets', 'kylo',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/kylo-logo.svg'));
      this._iconRegistry.addSvgIconInNamespace('assets', 'kylo-logo-white',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/kylo-logo-white.svg'));
    
    // SVG Icons
    this._iconRegistry.addSvgIcon('teradata', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));
    this._iconRegistry.addSvgIcon('teradata-dark', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-dark.svg'));
    this._iconRegistry.addSvgIcon('teradata-solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-solid.svg'));
    this._iconRegistry.addSvgIcon('teradata-icon', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-icon.svg'));

    this._iconRegistry.addSvgIcon('appcenter', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'));
    this._iconRegistry.addSvgIcon('control-center', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/control-center.svg'));
    this._iconRegistry.addSvgIcon('querygrid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'));
    this._iconRegistry.addSvgIcon('listener', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'));
    this._iconRegistry.addSvgIcon('workload-analytics', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/workload-analytics.svg'));
    this._iconRegistry.addSvgIcon('unity', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/unity.svg'));
    this._iconRegistry.addSvgIcon('viewpoint', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/viewpoint.svg'));



  }
  showPreSearchBar(): boolean {
    return this.searchQuery == null;
  };

  initiateSearch(): void {
    this.searchQuery = '';
  };

  showSearchBar(): boolean {
    return this.searchQuery != null
  };

  endSearch(): void {
    return this.searchQuery = null;
  };

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

}
