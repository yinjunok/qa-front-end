
/*
  1. 降低函数调用频率
*/
const debounce = (fn: Function, interval: number = 50) => {
  let timer: number;
  let preTime = Date.now();

  return () => {
    const curTime = Date.now();
    if (curTime - preTime > interval) {
      fn();
      preTime = curTime;
      clearTimeout(timer);
    }

    clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn();
    }, interval);
  }
}

export default debounce;
