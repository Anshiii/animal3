import * as React from 'react';
import './index.scss';
import { BLOCK_TYPE } from '../config/index';
import coordinateCalc from '../util/coordinateCalc';

class Block extends React.PureComponent {
  componentDidMount() {
    console.log(233);
  }

  render() {
    /* 块的类型  颜色/图片/type值 */
    const { typeNumber, coor, blockClick, isCurrent } = this.props;
    const transform = `translate3d(${coor.x}px,${coor.y}px,0)`;
    const { image } = BLOCK_TYPE[String(typeNumber)];

    return (
      <div
        refs={this.look}
        className={`block type-${typeNumber} ${isCurrent ? 'isCurrent' : ''}`}
        style={{ transform }}
        onClick={blockClick}
      >
        <div className="block-image">
          {/* <image src={require(`../assets/${type.image}`)}></image>  */}
          <img src={require(`../assets/${image}`)} />
        </div>
      </div>
    );
  }
}

export default Block;
