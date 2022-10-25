import Greeter from "./Greeter";

export default class HtmlGreeter extends Greeter {
  tagName?: string = "h1";
  constructor(toSay: string, newTagName?: string) {
    super(toSay);

    this.tagName = newTagName;
    if (this.tagName === undefined) {
      this.tagName = "h1";
    }
  }
  greet(htmlName: string): string {
    return `<${this.tagName}>${super.greet(htmlName)}</${this.tagName}>`;
  }
}
