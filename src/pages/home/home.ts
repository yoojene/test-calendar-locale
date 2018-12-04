import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  today: any;

  constructor(public navCtrl: NavController) {

    this.today = moment();

    console.log(this.today);

  }

}
