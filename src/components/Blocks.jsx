import React from 'react';

import Block from './Block';
import State from '../state/index';

class Blocks extends React.PureComponent {
  blockClick = item => {
    const dispatch = this.props.dispatch;
    dispatch({
      type: 'clickBlock',
      payload: { block: item }
    });
  };

  test = React.createRef();

  componentDidMount() {
    console.log(this.test.current);
  }

  render() {
    const content = [];
    const { typeList, currentBlock } = this.props.state;

    typeList.forEach(xState => {
      xState &&
        xState.forEach(item =>
          content.push(
            <Block
              ref={this.test}
              isCurrent={
                currentBlock &&
                currentBlock.grid.join('-') === item.grid.join('-')
              }
              blockClick={() => this.blockClick(item)}
              key={item.grid.join('-')}
              coor={item.coor}
              grid={item.grid}
              typeNumber={item.type}
            />
          )
        );
    });
    return <div className="wrap">{content}</div>;
  }
}

export default Blocks;
