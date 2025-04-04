var l = Object.defineProperty;
var h = (e, i, t) => i in e ? l(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var o = (e, i, t) => h(e, typeof i != "symbol" ? i + "" : i, t);
import { on as d } from "htmx.org";
class r extends HTMLElement {
  constructor() {
    super();
    o(this, "animationOne");
    o(this, "animationTwo");
  }
  connectedCallback() {
    const t = this.getAttribute("data-color") ?? "#639ef4";
    this.style.height = "0.2rem", this.style.width = "0", this.style.position = "fixed", this.style.top = "0", this.style.left = "0", this.style.zIndex = "9999", this.style.backgroundColor = t, this.style.display = "none", d("htmx:beforeRequest", (n) => {
      var a;
      const s = n;
      (a = s == null ? void 0 : s.detail) != null && a.boosted && (this.style.display = "block", this.animationOne = this.animate([
        { width: 0 },
        { width: "88%" }
      ], { duration: 7e3, fill: "forwards" }), this.animationOne.addEventListener("finish", () => {
        this.animationTwo = this.animate([
          { width: "88%" },
          { width: "95%" }
        ], { duration: 5e3, iterations: 1 / 0 });
      }));
    });
  }
  disconnectedCallback() {
    var t, n;
    this.animationOne && ((t = this.animationOne) == null || t.cancel()), this.animationTwo && ((n = this.animationTwo) == null || n.cancel());
  }
}
customElements.define("bridge-loader", r);
export {
  r as MagicLoader
};
