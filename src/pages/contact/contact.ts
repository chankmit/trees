import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WuncaService } from '../../app/services/wunca.service'; 
import { DetailPage } from '../detail/detail';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: any;
  constructor(public navCtrl: NavController, private wuncaservice:WuncaService) {

  }

  ngOnInit(){
    this.getPosts('new', 0);
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