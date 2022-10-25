import Greeter from "./Greeter";

export default class LoudGreeter extends Greeter {
  private extra = 0;
  addVolume() {
    this.extra++;
  }
  greet(loudName: string): string {
    let postFix: string = "";
    for (let i = 0; i < this.extra; i++) {
      postFix += "!";
    }
    // let returnString = `console.log("${super.greet(loudName)}")`;
    // return returnString;
    return `${super.greet(loudName)}${postFix}`;
  }
}
