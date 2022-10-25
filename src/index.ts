import Greeter from "./models/Greeter";
import HtmlGreeter from "./models/HtmlGreeter";
import JavaScriptGreeter from "./models/JavaScriptGreeter";
import LoudGreeter from "./models/LoudGreeter";

const greeter = new Greeter("Hello");
console.log(greeter.greet("Chico"));

const jsGreeter = new JavaScriptGreeter("Hello");
console.log(jsGreeter.greet("Chico"));

const loudGreeter = new LoudGreeter("Hello");
loudGreeter.addVolume();
loudGreeter.addVolume();
console.log(loudGreeter.greet("Chico"));

const htmlGreeter = new HtmlGreeter("Hello", "p");
console.log(htmlGreeter.greet("Chico"));

const htmlGreeter2 = new HtmlGreeter("Hello");
console.log(htmlGreeter2.greet("Chico"));
