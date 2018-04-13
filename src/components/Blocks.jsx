import React from 'react';

import Block from './Block';
import State from '../state/index';

const Blocks = () => {
  const content = [];

  State.getState().typeList.forEach(xState => {
    xState &&
      xState.forEach(item =>
        content.push(
          <Block
            key={item.grid.join('-')}
            coor={item.coor}
            typeNumber={item.type}
          />
        )
      );
  });
  return <div className="wrap">
    {content}
  </div>;
};

export default Blocks;
