import { Page } from 'ionic/ionic';
import { Http, Headers } from 'angular2/http';
// NEEDED TO MAKE MAP ON HTTP WORK!!
// https://github.com/angular/angular/issues/5632
import 'rxjs/add/operator/map';


@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  /**
  * inject the HTTP service into the component
  */
  constructor(http: Http) {
    this.http = http
    this.getRandomUser()
  }

  /**
   * gets user using random.me api
   */
  getRandomUser() {
    this.http.get('https://randomuser.me/api/')
      .map(res => res.json()) // convert json
      .subscribe(
        data => this.randomUser = data.results[0].user,
        err => console.log('Random User', err)
      );
  }
}
