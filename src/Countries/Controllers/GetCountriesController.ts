import { GetCountries } from "../Services/GetCountries.js";

class GetCountriesController {
    private service: GetCountries;

    constructor() {
        this.service = new GetCountries();
    }

    public async exec() {
        const countries = await this.service.exec();
        console.log(countries);
    }
}

(async () => {
    const controller = new GetCountriesController();
    await controller.exec();
})();