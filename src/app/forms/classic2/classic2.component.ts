import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {

  data: any = {
      title: 'Will Huang',
      desc: 'Hello World'
    };
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['Will Huang',
        [Validators.required, Validators.minLength(3)]
      ],
      desc: ['Hello World',
        [Validators.required]
      ],
      addresses: this.fb.group({
        address1: 'address 1',
        address2: 'address 2'
      })
    });
  }

}
