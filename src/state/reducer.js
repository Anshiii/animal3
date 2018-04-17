import canExchange from '../util/canExchange';

export default function(state, action) {
  console.log(state, action);

  switch (action.type) {
  case 'clickBlock':
    /* current 无值， 当前current 赋值 */
    /* current 有值， 判断其与 current 是否能交互位置，不能交互则赋值current */
    let currentBlock = canExchange(state.currentBlock, action.payload.block)
      ? null
      : action.payload.block;
    return {
      ...state,
      currentBlock
    };

    break;
  default:
    return state;
    break;
  }
}
