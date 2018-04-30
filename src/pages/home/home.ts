import { NextPage } from "./../next/next";
import { Component } from "@angular/core";
import { NavController, Platform } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, platform: Platform) {
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    // });
  }

  ionViewDidLoad() {}
  toNextPage() {
    this.navCtrl.push(NextPage, {});
  }
}
