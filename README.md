# react-container-as-prop
Attach React Container as a prop to Component

### Installation

**npm**

```bash
npm install react-container-as-prop --save
```

**yarn**

```bash
yarn add react-container-as-prop
```



### [PlayGround](https://codesandbox.io/s/jjw8881kyy)

#### App.js

```js
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <PersonName container={PersonData} />
        <PersonNameReversed container={PersonData} />
        <Country container={CountryData} />
      </div>
    );
  }
}
```

#### PersonData.js

```js
import { BaseContainer } from "react-container-as-prop";

export default class PersonData extends BaseContainer {
  getData() {
    return { firstName: "Bhagat", lastName: "Singh" };
  }
}
```

#### PersonName.js

```js
import React from "react";
import { BaseComponent } from "react-container-as-prop";

export default class PersonName extends BaseComponent {
  render() {
    const { firstName, lastName } = this.props;

    return (
      <div>
        <div>
          {firstName} {lastName}
        </div>
      </div>
    );
  }
}
```


#### PersonNameReversed.js

```js
import React from "react";
import { BaseComponent } from "react-container-as-prop";

export default class PersonNameReversed extends BaseComponent {
  render() {
    const { firstName, lastName } = this.props;

    return (
      <div>
        <div>
          {lastName}, {firstName}
        </div>
      </div>
    );
  }
}
```




### Development

To run the demo locally

```bash
git clone git@github.com:souvikbasu/react-container-as-prop.git
cd react-container-as-prop/demo
yarn
yarn start
open http://localhost:3000
```
