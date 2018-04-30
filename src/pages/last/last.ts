import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import "jQuery-Scanner-Detection";
import * as $ from "jquery";
declare global {
  interface JQuery {
    scannerDetection(option: any): JQuery;
  }
}
/**
 * Generated class for the LastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-last",
  templateUrl: "last.html"
})
export class LastPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    $(document).scannerDetection({
      //https://github.com/kabachello/jQuery-Scanner-Detection

      timeBeforeScanTest: 200, // wait for the next character for upto 200ms
      avgTimeByChar: 40, // it's not a barcode if a character takes longer than 100ms
      preventDefault: true,

      endChar: [13],
      onComplete: function(barcode, qty) {
        let validScan = true;

        // $("#scannerInput").val(barcode);
        // var newTemp = $("#pnlBarcodeList").text() + barcode;
        // $("#pnlBarcodeList").text(newTemp);
        $("#pnlBarcodeList").text(barcode);

        /**
         https://stackoverflow.com/questions/26790990/html-input-always-in-focus?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
         */
      }, // main callback function	,
      onError: function(string, qty) {
        $("#userInput").val($("#userInput").val() + string);
      }
    });
  }
}
