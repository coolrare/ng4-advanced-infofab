import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

function valueMustContainsWill(c: AbstractControl) {
  if(c.value.indexOf('Will') === -1) {
    return {
      'must-contains-will': {
        error_code: 1,
        error_msg: '字串中必須包含 Will 字樣'
      }
    };
  } else {
    return null;
  }
}

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
        [Validators.required, Validators.minLength(3), valueMustContainsWill]
      ],
      desc: ['Hello World',
        [Validators.required]
      ],
      group1: this.fb.group({
        sample1: this.fb.control('sample 1'),
        sample2: this.fb.control('sample 2')
      }),
      addresses: this.fb.array([
        this.fb.control('address 1'),
        this.fb.control('address 2')
      ])
    });
  }

  addSample() {
    const group1 = this.form.controls.group1 as FormGroup;
    group1.addControl('sample3', this.fb.control('sample 3'));
  }

  addAddress() {
    const addresses = this.form.controls.addresses as FormArray;
    addresses.push(
      this.fb.control('address ' + (addresses.length + 1))
    );
  }

  setValue() {
    this.form.setValue({
      'title': 'Will Huang',
      'desc': 'Hello World',
      'group1': {
        'sample1': 'sample 1',
        'sample2': 'sample 2'
      },
      'addresses': [
        'address 1',
        'address 2'
      ]
    });
  }

  patchValue() {
    this.form.patchValue(this.data);
  }

  reset() {
    this.form.reset(this.data);
  }

}
