import * as React from 'react';
import Carousel from './carousel'

export interface ITestProps {
}

export default class Test extends React.Component<ITestProps> {
  public render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}
