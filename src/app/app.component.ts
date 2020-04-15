import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Cynthia';

  itembuah = [{
    nama : 'kelengkeng',
    harga : 10000

  },{
    nama:'jeruk',
    harga : 12000
  }];
}
