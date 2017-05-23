import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type = 0;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    // 直接取得當下的 :type 參數值
    this.type = this.route.snapshot.params['type'];

    // 透過 Observable 取得即時的 :type 參數值
    this.route.params.subscribe((params) => {
      this.type = params['type'];
    });
  }

}
