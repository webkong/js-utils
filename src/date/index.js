/**
 * @description Converts time into the specified format
 * @param {String|Number} time 
 * @param {String} fmt 
 */
function format(time, fmt) {
  fmt = fmt || 'yyyy-MM-dd';
  time = timestamp(time);
  let date = new Date(time);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    let str = o[k] + '';
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}
/**
 * @description Get zodiac
 * @param {String|Number} time 
 */
function astro(time) {
  time = timestamp(time);
  let date = new Date(time);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let s = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
  let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
  return s.substr(month * 2 - (day < arr[month - 1] ? 2 : 0), 2);
}
/**
 * @description 返回从出生到现在的天数
 * @param {String|Number} time
 */
function birthDays(time) {
  time = timestamp(time);
  return parseInt((new Date().getTime() - new Date(time).getTime()) / 86400000); //(1000 * 60 * 60 *24)
}

/**
 * @description Pass any format of the time, into a timestamp (milliseconds)
 * @param {String|Number} time
 */
function timestamp(time) {
  if (!time) {
    return Date().getTime();
  }
  if (typeof time !== 'number') {
    time = Date.parse(new Date(time).toString());
  }
  time = time.toString();
  if (time.length === 10) {
    time = time * 1000;
  } else {
    time = time * 1;
  }
  return time;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

exports.date = {
  format,
  astro,
  timestamp
}