import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  data: any = {
    title: '',
    desc: []
  };

  list = new Array(2);

  constructor(private http: Http) { }

  ngOnInit() {
  }

  doSubmit(f: NgForm) {
    console.log(f.value);

    if (f.valid) {
      this.http.post('http://localhost:3000/myform', this.data)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  addNew() {
    this.list.push(0);
  }
}
