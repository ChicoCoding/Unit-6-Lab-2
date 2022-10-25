import Greeter from "../src/models/Greeter";
import HtmlGreeter from "../src/models/HtmlGreeter";
import JavaScriptGreeter from "../src/models/JavaScriptGreeter";
import LoudGreeter from "../src/models/LoudGreeter";

describe("Greeter class", () => {
  test("constructor test", () => {
    const construcorTest = new Greeter("Hello");

    expect(construcorTest.greeting).toBe("Hello");
  });

  test("greet test", () => {
    const construcorTest = new Greeter("Hello");

    expect(construcorTest.greet("Test")).toBe("Hello, Test!");
  });
});

describe("jsGreeter class", () => {
  test("greet test", () => {
    const jsGreetTest = new JavaScriptGreeter("Hi");

    expect(jsGreetTest.greet("Mom")).toBe(`console.log("Hi, Mom!")`);
  });
  test("greeting test", () => {
    const jsGreetTest = new JavaScriptGreeter("Hi");

    expect(jsGreetTest.greeting).toBe(`Hi`);
  });
});

describe("loudGreeter class", () => {
  test("low volume test", () => {
    const lowGreetTest = new LoudGreeter("I am your father");
    expect(lowGreetTest.greet("Luke")).toBe("I am your father, Luke!");
  });

  test("high volume test", () => {
    const loudGreetTest = new LoudGreeter("No");
    loudGreetTest.addVolume();
    loudGreetTest.addVolume();
    loudGreetTest.addVolume();
    loudGreetTest.addVolume();
    loudGreetTest.addVolume();
    expect(loudGreetTest.greet("thats impossible")).toBe(
      "No, thats impossible!!!!!!"
    );
  });
});
describe("HtmlGreeter class", () => {
  test("paragraph tag test", () => {
    const htmlGreeter = new HtmlGreeter("Hellllloooooooo", "p");

    expect(htmlGreeter.greet("Vietnam")).toBe(
      "<p>Hellllloooooooo, Vietnam!</p>"
    );
  });

  test("default tag test", () => {
    const htmlGreeter = new HtmlGreeter("Good afternoon, good evening");

    expect(htmlGreeter.greet("and good night")).toBe(
      "<h1>Good afternoon, good evening, and good night!</h1>"
    );
  });
});
