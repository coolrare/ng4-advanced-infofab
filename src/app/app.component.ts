import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  genUrl() {
    let url = [];
    url.push('page2');
    url.push('a');
    url.push('b');
    url.push('c');
    url.push('d');
    return url;
  }
}
