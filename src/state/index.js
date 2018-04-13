import coordinateCalc from '../util/coordinateCalc';
import typeCalc from '../util/typeCalc';

const currentBlock = { x: 0, y: 0 };
const isAnimate = false;

const typeList = [];

for (let x = 1; x < 6; x += 1) {
  typeList[x] = [];
  for (let y = 1; y < 6; y += 1) {
    typeList[x][y] = { grid: [x, y], type: typeCalc(), coor: coordinateCalc({ x, y }) };
  }
}

const state = {
  typeList,
  currentBlock,
  isAnimate,
};

export default { getState: () => state,dispatch:()=>{} };
