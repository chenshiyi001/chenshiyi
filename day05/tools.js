/* 
     el:需要执行动画的函数
     attr:需要动画的属性
     target:目标位置
     speed：移动速度
     callback：动画结束的回调函数
   */
function animat(el, attr, target, speed, callback) {
  clearInterval(el.interId)
  var currentValue = parseInt(getComputedStyle(el)[attr])
  if (currentValue > target) {
    speed = -speed
  }
  el.interId = setInterval(function () {
    // 先获取到元素本身的位置
    var oldValue = parseInt(getComputedStyle(el)[attr])
    // 得到一个新的位置
    var newValue = oldValue + speed
    // 判断当值大于等于目标位置设置值为目标位置
    if (newValue > target && speed > 0 || newValue < target && speed < 0) {
      newValue = target
    }
    // 设置元素的最新位置
    el.style[attr] = newValue + "px"
    // 判断当元素位置达到目标位置以后关闭定时器
    if (newValue === target) {
      clearInterval(el.interId)

      callback && callback()
    }
  }, 20)
}

function ajax(options){
  var method = options.method || 'get'
  var url = options.url
  var params = options.params || {}
  var formatParams = ''
  var callback = options.success
  // 准备参数
  for(var key in params){
    formatParams +='&'+ key+"="+params[key]
  } 
  formatParams = formatParams.slice(1)
  var xhr = new XMLHttpRequest()

  if(method.toLowerCase() === "get"){
    xhr.open(method,url+"?"+formatParams)
    xhr.send(null)
  }else if(method.toLowerCase() === "post"){
    xhr.open(method,url)
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    xhr.send(formatParams)
  }

  // 接收
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      callback(JSON.parse(xhr.responseText))
    }
  }

}
