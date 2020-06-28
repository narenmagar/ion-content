import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MockData from '../util/MockData';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  private contentDataSize = 7; // change it based on need.
  private itemHeightConstant = 5.5; // change it based on need.
  private items = MockData.carLessThan7();
  // private items = MockData.carMoreThan7(); use this to check cars more than 7

  constructor(private activatedRoute: ActivatedRoute,
              private el: ElementRef) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    // use directives for best practice.
    const topcontent = [].slice.call((this.el.nativeElement as HTMLElement).getElementsByClassName('topcontent'));
    // set the height dynamically based on the need.
    // check the number or rows that will be soon in the screen
    // if the number of items are less than it than set the height based on the number of items.
    const len = this.items.cars.length;
    if (len < this.contentDataSize) {
      const height = 'height:' + len * this.itemHeightConstant + 'vh';
      topcontent[0].setAttribute('style', height);
    } else {
      topcontent[0].setAttribute('style', 'height:50vh');
    }
  }
}
