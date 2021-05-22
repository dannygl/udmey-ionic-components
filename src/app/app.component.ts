import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;
  constructor(
    private platform: Platform,
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.componentes = this.dataService.getMenuOpts();
    });
  }
}
