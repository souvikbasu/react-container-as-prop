import { BaseContainer } from 'react-container-as-prop';

export default class CountryContainer extends BaseContainer {
  async getData() {
    let result = await fetch("/data/country.json").then(res =>{
      let json = res.json();
      return json;
    });
    return result;
  }
}
