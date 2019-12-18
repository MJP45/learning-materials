import { Component, Input } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent {
  @Input() min: number;
  @Input() max: number;
  @Input() value: number;

  handleValueChange(value: string) {
    this.value = +value;
  }
}
