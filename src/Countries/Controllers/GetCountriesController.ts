import { GetCountriesContract } from "../Contracts/GetCountriesContract.ts";
import { GetCountries } from "../Services/GetCountries.ts";

export class GetCountriesController {
    private readonly service: GetCountriesContract;

    constructor(service: GetCountriesContract) {
        this.service = service;
    }

    public async exec(): Promise<object[]> {
        return await this.service.exec();
    }
}

(async () => {
    const controller = new GetCountriesController(new GetCountries());
    await controller.exec();
})();