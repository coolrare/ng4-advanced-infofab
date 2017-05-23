import {Component, OnInit} from '@angular/core';
import {FlotCharts} from 'app/shared/init-flotcharts';

import 'assets/vendor/flot/jquery.flot.js';
import 'assets/vendor/flot/jquery.flot.categories.js';
import 'assets/vendor/flot-spline/js/jquery.flot.spline.js';
import 'assets/vendor/flot.tooltip/js/jquery.flot.tooltip.js';
import 'assets/vendor/flot/jquery.flot.resize.js';
import 'assets/vendor/flot/jquery.flot.pie.js';
import 'assets/vendor/flot/jquery.flot.time.js';
import 'assets/vendor/sidebysideimproved/jquery.flot.orderBars.js';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(FlotCharts);
  }
}
