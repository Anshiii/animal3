export default function canExchange(a, b) {
  if (!a || !b || !a.grid || !b.grid) {
    return false;
  }

  // 判断b是a 上下左右 之一的块，且没有碰壁
  if(Math.abs(b.grid[0] - a.grid[0])+Math.abs(b.grid[1] - a.grid[1]) === 1){
    let tem = a;
    a = b;
    b = a;
    /* state 的位置改变。 */
    return true;
  }
  return false;
}
