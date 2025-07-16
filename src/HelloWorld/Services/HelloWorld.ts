import { HelloWorldContract } from "../Contracts/HelloWorldContract.ts";

export class HelloWorld implements HelloWorldContract {
    public displayMessage(): void {
        console.log('Hello, world!');
    }
}
