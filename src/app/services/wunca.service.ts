import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/rx';

@Injectable()
export class WuncaService{
    http:any;
    baseUrl: String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://www.rbnrds.rbru.ac.th/api/slim/';
        //this.baseUrl = 'https://slim-chankmit.c9users.io/';
    }

    getPosts(category, page){
        return this.http.get(this.baseUrl+'/'+category+'/'+page+'/') 
        .map(res => res.json());
    }
    getPostsFilter(category, family, keyword, page, status){
        return this.http.get(this.baseUrl+'/'+category+'/'+family+'/'+keyword+'/'+page+'/'+status+'/') 
        .map(res => res.json());
    }
}
