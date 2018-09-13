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



### PlayGround
Click [here](https://codesandbox.io/s/jjw8881kyy) for live demo

### Why Container as Prop?

Say you want to show person full name on screen. Ideally you will have a container to fetch data and a component to visualize data. PersonContainer to fetch Person data would return a json with first and last name.

#### PersonContainer.js

```js
import { BaseContainer } from "react-container-as-prop";

export default class PersonContainer extends BaseContainer {
  getData() {
    return { firstName: "Bhagat", lastName: "Singh" };
  }
}
```

And PersonName component to show full name of the person using `firstName` and `lastName` props

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

Similarly, in another component you want to show the same name in reversed order as `LAST NAME, FIRST NAME`



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

Although the inner components are different, the container fetching data is the same. So instead of creating separate containers for different ways of visualization, you can simple pass the container as prop to the component. 

This allows reusability of the container agnostic of the rendering of the data.


#### App.js

```js
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <PersonName container={PersonContainer} />
        <PersonNameReversed container={PersonContainer} />
        <Country container={CountryContainer} />
      </div>
    );
  }
}
```


### Development

To run the demo locally

```bash
git clone git@github.com:souvikbasu/react-container-as-prop.git
cd react-container-as-prop/demo/01-simple-case
yarn
yarn start
open http://localhost:3000
```

If you like the idea, please :star: this repo
