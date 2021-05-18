import {Component, OnInit} from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redorectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      redorectTo: '/alert',
      name: 'Alert',
      icon: 'american-football'
    },
    {
      redorectTo: '/action-sheet',
      name: 'Action sheet',
      icon: 'airplane-outline'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
