import { HelloWorldContract } from "../Contracts/HelloWorldContract.ts";
import { HelloWorld } from "../Services/HelloWorld.ts";

export class DisplayMessageController {
    private readonly service: HelloWorldContract;

    constructor(service: HelloWorldContract) {
        this.service = service;
    }

    public exec() {
        this.service.displayMessage();
    }
}

const controllerInstance = new DisplayMessageController(new HelloWorld);
controllerInstance.exec();