import { GetCountriesContract } from "../Contracts/GetCountriesContract.js";
import { CountriesAPI } from "./CountriesAPI.js";

export class GetCountries extends CountriesAPI implements GetCountriesContract {
    public async exec():  Promise<object> {
        return await this.getCountries();
    }

    private async getCountries(): Promise<object> {
        const url = `${CountriesAPI.apiUrl}/all?fields=name,region`;
        const countriesRequest = await fetch(url);
        return await countriesRequest.json();
    }
}