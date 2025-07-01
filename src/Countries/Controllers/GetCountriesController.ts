import { GetCountriesContract } from "../Contracts/GetCountriesContract";
import { GetCountries } from "../Services/GetCountries";

class GetCountriesController {
    private readonly service: GetCountriesContract;

    constructor(service: GetCountriesContract) {
        this.service = service;
    }

    public async exec() {
        const countries = await this.service.exec();
        console.log(countries);
    }
}

(async () => {
    const controller = new GetCountriesController(new GetCountries());
    await controller.exec();
})();