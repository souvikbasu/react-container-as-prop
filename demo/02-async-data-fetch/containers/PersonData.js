import { BaseContainer } from 'react-container-as-prop';

export default class PersonData extends BaseContainer {
  async getData() {
    let result = await fetch("/data/person.json").then(res =>{
      let json = res.json();
      return json;
    });
    return result;
  }
}
