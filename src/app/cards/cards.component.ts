import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BlockComponent } from "app/block/block.component";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type: string = '';

  key1 = '';
  key2 = '';

  @ViewChild('block1')
  block1: BlockComponent;

  @ViewChild(BlockComponent)
  block2: BlockComponent;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    // 直接取得當下的 :type 參數值
    // this.type = this.route.snapshot.params['type'];

    // 透過 Observable 取得即時的 :type 參數值
    this.route.params.subscribe((params) => {
      this.type = params['type'];

      this.key1 = params['key1'];
      this.key2 = params['key2'];
    });

    this.route.queryParams.subscribe((params) => {
      this.key1 = params['key1'];
      this.key2 = params['key2'];
    });
  }

  goNext(num) {
    let next_id = parseInt(this.type, 10) + num;
    this.router.navigate(['/cards', next_id]);
  }

  ngAfterViewInit() {
    this.block2.title = 'Oh, Yeah!';
  }

}
