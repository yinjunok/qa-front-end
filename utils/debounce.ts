
/*
  1. 降低函数调用频率
*/
const debounce = (fn: Function, interval: number = 1000) => {
  let timer: number;

  return () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn();
    }, interval);
  }
}

export default debounce;
