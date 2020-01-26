import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { Routes, RouterModule } from '@angular/router';
import { Class02Component } from './classes/class02/class02.component';
import { Class03Component } from './classes/class03/class03.component';
import { Class04Component } from './classes/class04/class04.component';
import { Class05Component } from './classes/class05/class05.component';
import { Class06Component } from './classes/class06/class06.component';
import { Class07Component } from './classes/class07/class07.component';
import { Class08Component } from './classes/class08/class08.component';
import { Class09Component } from './classes/class09/class09.component';
import { Class10Component } from './classes/class10/class10.component';
import { Class11Component } from './classes/class11/class11.component';
import { Class12Component } from './classes/class12/class12.component';
import { Class13Component } from './classes/class13/class13.component';
import { Class14Component } from './classes/class14/class14.component';
import { Class15Component } from './classes/class15/class15.component';
import { Class16Component } from './classes/class16/class16.component';
import { Class17Component } from './classes/class17/class17.component';
import { Class18Component } from './classes/class18/class18.component';
import { Class19Component } from './classes/class19/class19.component';
import { Class20Component } from './classes/class20/class20.component';
import { Class21Component } from './classes/class21/class21.component';
import { Class22Component } from './classes/class22/class22.component';
import { Class23Component } from './classes/class23/class23.component';
import { Class24Component } from './classes/class24/class24.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'class02',
    component: Class02Component
  },
  {
    path: 'class03',
    component: Class03Component
  },
  {
    path: 'class04',
    component: Class04Component
  },
  {
    path: 'class05',
    component: Class05Component
  },
  {
    path: 'class06',
    component: Class06Component
  },
  {
    path: 'class07',
    component: Class07Component
  },
  {
    path: 'class08',
    component: Class08Component
  },
  {
    path: 'class09',
    component: Class09Component
  },
  {
    path: 'class10',
    component: Class10Component
  },
  {
    path: 'class11',
    component: Class11Component
  },
  {
    path: 'class12',
    component: Class12Component
  },
  {
    path: 'class13',
    component: Class13Component
  },
  {
    path: 'class14',
    component: Class14Component
  },
  {
    path: 'class15',
    component: Class15Component
  },
  {
    path: 'class16',
    component: Class16Component
  },
  {
    path: 'class17',
    component: Class17Component
  },
  {
    path: 'class18',
    component: Class18Component
  },
  {
    path: 'class19',
    component: Class19Component
  },
  {
    path: 'class20',
    component: Class20Component
  },
  {
    path: 'class21',
    component: Class21Component
  },
  {
    path: 'class22',
    component: Class22Component
  },
  {
    path: 'class23',
    component: Class23Component
  },
  {
    path: 'class24',
    component: Class24Component
  }
];

@NgModule({
  declarations: [MenuComponent,
    Class02Component, Class03Component, Class04Component, Class05Component,
    Class06Component, Class07Component, Class08Component, Class09Component,
    Class10Component, Class11Component, Class12Component, Class13Component,
    Class14Component, Class15Component, Class16Component, Class17Component,
    Class18Component, Class19Component, Class20Component, Class21Component,
    Class22Component, Class23Component, Class24Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenuModule { }
