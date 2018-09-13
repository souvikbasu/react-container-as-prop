import { BaseContainer } from 'react-container-as-prop';

export default class CountryContainer extends BaseContainer {
  getData() {
    return {"country": "India"};
  }
}
