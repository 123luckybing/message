export default {
  // 定义一个函数名称叫 Time 调用Time.Date(time)
  Date(time) {
    if(!time) return '';
    let date = new Date(time);
    let second = date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds();
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let hour = date.getHours() < 10 ? '0' + date.getHours(): date.getHours();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-'+ date.getDate()+' ' + hour + ':' + minute + ':' + second;
  }
}