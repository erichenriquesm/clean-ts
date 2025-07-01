import { HelloWorldContract } from "../Contracts/HelloWorldContract.js";
import { HelloWorld } from "../Services/HelloWorld.js";

class DisplayMessageController {
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