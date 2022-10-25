function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
// el就是展示小方块的区域
// options 用户填写的配置对象
function Box(el, options) {
  this.el = typeof el === "object" ? el : document.querySelector(el)
  this.width = options.width ?? 20
  this.height = options.height ?? 20
  this.bgcColor = options.bgcColor ?? 'red'
  this.count = options.count ?? 1
  this.isRandom = options.isRandom ?? false 
  this.divArr = []
  this.init()
  this.isRandom &&  this.random()
}

Box.prototype.init = function () {
  for (var i = 0; i < this.count; i++) {
    var divDom = document.createElement("div")
    divDom.style.width = this.width + "px"
    divDom.style.height = this.height + "px"
    divDom.style.backgroundColor = this.bgcColor
    this.divArr.push(divDom)
    this.el.appendChild(divDom)
  }
}


Box.prototype.random = function(){
  this.el.style.position = 'relative';
  this.divArr.forEach(function(item){
    var x = getRandomIntInclusive(0,this.el.offsetWidth - this.width)
    var y = getRandomIntInclusive(0,this.el.offsetHeight - this.height)
    item.style.position = 'absolute';
    item.style.left = x + "px"
    item.style.top = y + "px"
  },this)
}

Box.prototype.click = function(color){
  color = color ?? '#000'
  this.divArr.forEach(function(item){
    item.onclick = function(){
      this.style.backgroundColor = color
    }
  })
}