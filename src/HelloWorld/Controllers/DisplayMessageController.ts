import { HelloWorld } from "../Services/HelloWorld.js";

class DisplayMessageController {
    private service: HelloWorld;

    constructor() {
        this.service = new HelloWorld();
    }

    public exec() {
        this.service.displayMessage();
    }
}

const controllerInstance = new DisplayMessageController();
controllerInstance.exec();