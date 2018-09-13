import { BaseContainer } from 'react-container-as-prop';

export default class CountryData extends BaseContainer {
  getData() {
    return {"country": "India"};
  }
}
