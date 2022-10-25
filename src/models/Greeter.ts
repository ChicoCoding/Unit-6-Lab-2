export default class Greeter {
  greeting: string;
  constructor(toSay: string) {
    this.greeting = toSay;
  }
  greet(name: string): string {
    return `${this.greeting}, ${name}!`;
  }
}
