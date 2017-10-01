import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular'; 
import { WuncaService } from '../../app/services/wunca.service'; 
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-family',
  templateUrl: 'family.html'
})
export class FamilyPage { 
  family: any;
  items:any;
  constructor(public navCtrl: NavController, public params:NavParams, private wuncaservice:WuncaService) { 
      this.family = params.get('family');
  }

  ngOnInit(){
    this.getPosts('new', this.family.pf_id);
  }
  getPosts(category, page){
    this.wuncaservice.getPosts(category, page).subscribe(response => { this.items = response; });
  }
  getPostsFil(category, family, keyword, page, status){
    this.wuncaservice.getPostsFilter(category, family, keyword, page, status).subscribe(response => { this.items = response; });
  }

  getItems(ev) { 
    var val = ev.target.value;
    this.getPostsFil('search','0', val, 1, '0');
  }
  viewItem(item){
    this.navCtrl.push(DetailPage, {item:item});
  }


}
 