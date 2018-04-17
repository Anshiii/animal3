import coordinateCalc from '../util/coordinateCalc';
import typeCalc from '../util/typeCalc';
import reducer from './reducer';

const currentBlock = null;
const isAnimate = false;
const typeList = [];


for (let x = 0; x < 5; x += 1) {
  typeList[x] = [];
  for (let y = 0; y < 5; y += 1) {
    typeList[x][y] = {
      grid: [x, y],
      type: typeCalc(),
      coor: coordinateCalc({ x, y })
    };
  }
}

let state = {
  typeList,
  currentBlock,
  isAnimate
};

export default {
  getState: () => state,
  dispatch: action => {
    let nextState = reducer(state, action);
    console.log(nextState);

    if (state !== nextState) {
      state = nextState;
    }
  }
};
