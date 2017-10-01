import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WuncaService } from '../../app/services/wunca.service'; 
import { FamilyPage } from '../family/family';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  familys: any;
  constructor(public navCtrl: NavController, private wuncaservice:WuncaService) {

  }
  ngOnInit(){
    this.getPosts('familys', 1);
  }

  getPosts(category, page){
    this.wuncaservice.getPosts(category, page).subscribe(response => { this.familys = response; });
  }
  viewFamily(family){
    this.navCtrl.push(FamilyPage, {family:family});
  }
}
