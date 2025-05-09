import "../scss/style.scss";
import { tns } from "/node_modules/tiny-slider/src/tiny-slider";
import JustValidate from "just-validate";

window.addEventListener("DOMContentLoaded", () => {
  const slider = tns({
    container: ".projects__slider",
    items: 2,
    gutter: 20,
    fixedWidth: 252,
    controls: false,
    nav: false,
    loop: false,
    swipeAngle: false,
    viewportMax: 375,
    speed: 400,
  });

  if (window.innerWidth >= 1440) {
    slider.destroy();
  }

  const validator = new JustValidate("#form", {
    submitFormAutomatically: true,
  });
  validator
    .addField(document.querySelector("#name"), [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 2,
      },
    ])
    .addField(document.querySelector("#email"), [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField(document.querySelector("#phone"), [
      {
        rule: "number",
      },
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 11,
      },
      {
        rule: "maxLength",
        value: 12,
      },
    ]);
});
