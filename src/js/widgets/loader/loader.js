import React from 'react'
import { Loader } from 'semantic-ui-react'
import Funnies from 'funnies';

let funnies = new Funnies();

const LoaderWidget = () => (
      <Loader active size="massive" inline="centered">
        <span>Loading...</span>
        <div> {funnies.message()}</div>
      </Loader>
)

export default LoaderWidget;