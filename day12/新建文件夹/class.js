function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
class Box {
    constructor(el, options) {
        this.el = typeof el === "object" ? el : document.querySelector(el)
        this.width = options.width ?? 20
        this.height = options.height ?? 20
        this.bgc = options.backgroundcolor ?? "red"
        this.count = options.count ?? 1
        this.isRandom = options.isRandom ?? false
        this.isautoplay = options.isautoplay ?? false
        this.shape = options.shape ?? "square"
        this.divArr = []
        this.init()
        this.isRandom && this.Random()
        if(this.isRandom){
            this.isautoplay && this.autoplay(this.isautoplay.delay)
        }

    }
    init() {
       if(this.shape==="circular"){
        for (let i = 0; i < this.count; i++) {
            const divDom = document.createElement("div")
            divDom.style.width = this.width + "px"
            divDom.style.height = this.height + "px"
            divDom.style.backgroundColor = this.bgc
            divDom.style.borderRadius="15px"
            this.divArr.push(divDom)
            this.el.appendChild(divDom)
                
        }
       }
       else{
        for (let i = 0; i < this.count; i++) {
            const divDom = document.createElement("div")
            divDom.style.width = this.width + "px"
            divDom.style.height = this.height + "px"
            divDom.style.backgroundColor = this.bgc
            // divDom.style.borderRadius="15px"
            this.divArr.push(divDom)
            this.el.appendChild(divDom)
                
        }
        
       }
    }
    Random() {
        this.el.style.position = "relative"
        this.divArr.forEach(function (item) {
            item.style.position = "absolute"
            const x = getRandomIntInclusive(0, this.el.offsetWidth - this.width)
            const y = getRandomIntInclusive(0, this.el.offsetHeight - this.height)
            item.style.left = x + "px"
            item.style.top = y + "px"

        }, this)
    }
    autoplay(delay) {
        const element = this
        const interId = setInterval(function () {
            element.divArr.forEach(function (item) {
                item.style.position = "absolute"
                const x = getRandomIntInclusive(0, element.el.offsetWidth - element.width)
                const y = getRandomIntInclusive(0, element.el.offsetHeight - element.height)
                item.style.backgroundColor=element.bgc
                item.style.left = x + "px"
                item.style.top = y + "px"

            })
        }, delay)
    }

    remove() {
        this.divArr.forEach(function (item) {
            item.onclick = function () {
                this.style.display = "none"
            }
        })

    }
    click(color){
        this.divArr.forEach(function(item){
            item.onclick = function () {
                this.style.backgroundColor = color
            }
        })
    }
}