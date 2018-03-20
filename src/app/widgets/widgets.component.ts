import { Component, OnInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import {GetStreamService} from '../services/GetStreamService';
import * as stream from 'getstream';

declare var $: any;
declare interface Task {
  title: string;
  checked: boolean;
}
@Component({
    selector: 'app-widgets-cmp',
    templateUrl: 'widgets.component.html',
    // styleUrls: ['./widgets.component.css']
})


export class WidgetsComponent implements OnInit {
    constructor( public getStreamService: GetStreamService ) { }

 isDataAvailable:boolean = false;
 feeds : any[];
 data: any;
    ngOnInit() {
      this.getStreamService.getFeed()
   .subscribe(
       feeds => {
         this.feeds = feeds;
         this.isDataAvailable = true;
         console.log(this.feeds);
       } ,
        err => {
            // Log errors if any
            console.log(err);
  });
}
}
