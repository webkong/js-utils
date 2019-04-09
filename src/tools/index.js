/**
 * @name getUrlParam
 * @description get param from url
 * @param {String} param
 * @param {String=} url
 * @return {String}
 */
function getUrlParam(name, url) {
  var u = arguments[1] || window.location.search,
    reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
    r = u.substr(u.indexOf("?") + 1).match(reg);
  return r != null ? r[2] : "";
}

exports.tools = { getUrlParam };
