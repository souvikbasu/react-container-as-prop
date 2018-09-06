import { BaseContainer } from '../../../dist';

export default class PersonData extends BaseContainer {
  getData() {
    return {"firstName": "Bhagat", "lastName": "Singh"};
  }
}
