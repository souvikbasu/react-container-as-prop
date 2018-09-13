import { BaseContainer } from 'react-container-as-prop';

export default class PersonContainer extends BaseContainer {
  getData() {
    return {"firstName": "Bhagat", "lastName": "Singh"};
  }
}
