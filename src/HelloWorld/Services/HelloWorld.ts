import { HelloWorldContract } from "../Contracts/HelloWorldContract";

export class HelloWorld implements HelloWorldContract{
    public displayMessage(): void {
        console.log('Hello, world!');
    }
}
