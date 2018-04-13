
import { BLOCK_SIZE, BLOCK_PAD } from '../config/index';

export default function coordinateCalc(coor) {
  // 需要绘图的 起点 左上角，js获取容器的左上角位置。
  const x0 = 100;
  const y0 = 100;
  let x = x0;
  let y = y0;

  x = x0 + (coor.x * BLOCK_PAD) + ((coor.x - 1) * BLOCK_SIZE);
  y = y0 + (coor.y * BLOCK_PAD) + ((coor.y - 1) * BLOCK_SIZE);

  return { x, y };
}
