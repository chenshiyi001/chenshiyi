function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

function Box1(el, options) {
    this.el = typeof el === "object" ? el : document.querySelector(el)
    this.width = options.width ?? 20
    this.height = options.width ?? 20
    this.bgcColor = options.color ?? "red"
    this.count = options.count ?? 1
    this.isRandom = options.isRandom ?? false
    this.isautoplay = options.isautoplay ?? false
    this.shape = options.shape
    this.divArr = []
    this.init()
    this.isRandom && this.Random()
    this.isautoplay && this.autoplay(this.isautoplay.delay)
}
Box1.prototype.init = function () {
    if (this.shape === "circular") {
        for (var i = 0; i < this.count; i++) {
            var divDom = document.createElement("div")
            divDom.style.width = this.width + "px"
            divDom.style.height = this.height + "px"
            divDom.style.borderRadius = "50%"
            divDom.style.backgroundColor = this.bgcColor
            this.divArr.push(divDom)
            this.el.appendChild(divDom)
        }
    }
    else {
        for (var i = 0; i < this.count; i++) {
            var divDom = document.createElement("div")
            divDom.style.width = this.width + "px"
            divDom.style.height = this.height + "px"
            divDom.style.backgroundColor = this.bgcColor
            this.divArr.push(divDom)
            this.el.appendChild(divDom)
        }
    }
}

Box1.prototype.Random = function () {
    this.el.style.position = "relative";
    this.divArr.forEach(function (item) {
        var x = getRandomIntInclusive(0, this.el.offsetWidth - this.width)
        var y = getRandomIntInclusive(0, this.el.offsetHeight - this.height)
        item.style.position = 'absolute';
        item.style.left = x + "px"
        item.style.top = y + "px"
    }, this)

}
Box1.prototype.autoplay = function (delay) {
    var element = this
    var interId = setInterval(function () {
        element.divArr.forEach(function (item) {
            var x = getRandomIntInclusive(0, element.el.offsetWidth - element.width)
            var y = getRandomIntInclusive(0, element.el.offsetHeight - element.height)
            item.style.position = 'absolute';
            item.style.left = x + "px"
            item.style.top = y + "px"
            item.style.backgroundColor = element.bgcColor
        }, element)
    }, delay)
}

Box1.prototype.Click = function (color) {
    this.divArr.forEach(function (item) {
        item.onclick = function () {
            this.style.backgroundColor = color
        }
    })
}

Box1.prototype.remove = function () {
    this.divArr.forEach(function (item) {
        item.onclick = function () {
            this.style.display = "none"
        }
    })
}