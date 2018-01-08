import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  param;
  language;
  translate;
  translationParams = ['WORLD'];

  constructor(translate: TranslateService) {
    this.translate = translate;

    translate.addLangs(['en', 'sv']);
    translate.setDefaultLang('en');

    this.language = translate.getBrowserLang();

    this.setupLanguage();
  }

  setupLanguage() {
    this.translate.use(this.language);

    this.translate.get('WORLD').subscribe(res => {
      this.param = {value: res};
    });
  }

  changeLanguage() {
    this.language = this.language === 'en' ? 'sv' : 'en';
    this.setupLanguage();
  }
}
