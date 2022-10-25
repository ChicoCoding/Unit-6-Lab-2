import Greeter from "./Greeter";

export default class JavaScriptGreeter extends Greeter {
  greet(jsName: string): string {
    let returnString = `console.log("${super.greet(jsName)}")`;
    return returnString;
  }
}
