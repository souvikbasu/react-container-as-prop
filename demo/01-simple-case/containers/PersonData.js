import { BaseContainer } from 'react-container-as-prop';

export default class PersonData extends BaseContainer {
  getData() {
    return {"firstName": "Bhagat", "lastName": "Singh"};
  }
}
