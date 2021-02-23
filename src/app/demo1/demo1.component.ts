import { Component, OnInit } from "@angular/core";
import { Demo1 } from "./demo1";

@Component({
  selector: "app-demo1",
  templateUrl: "./demo1.component.html",
  styleUrls: ["./demo1.component.css"]
})
export class Demo1Component implements OnInit {
  [x: string]: any;
  ngOnInit(): void {}
  topics = ["Angular", "React", "Javascript"];
  topicHasError = true;
  submitted = false;

  demo1Model = new Demo1(
    "abcd",
    "abcd@gmail.com",
    90000000000,
    "default",
    "morning",
    true
  );

  validateTopic(value: string) {
    if (value === "default") {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    // console.log(this.demo1Model);
    this.submitted = true;
    this._dem01Service
      .enroll(this.demo1Model)
      .subscribe(
        data => console.log("Success!", data),
        error => console.error("Error!", error)
      );
  }
}
