function renderReverse(data) {
  if (data.status !== 0) return
  var city = document.getElementById('city')
  city.innerHTML = data.result.addressComponent.city
}
(function () {
  /* 获取当前的经纬度 */
  // navigator.geolocation.getCurrentPosition(function(p){
  //   var script = document.createElement("script")
  //   script.src = 'http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location='+p.coords.latitude+','+p.coords.longitude+'&output=json&pois=0'
  //   document.body.appendChild(script)
  // })

  // 初始化betterscroll  回去计算滚动区域的高度 0
  var bs = BetterScroll.createBScroll('.wrapper', {
    // 开启上拉加载更多
    pullUpLoad: true,
    // 开启下拉刷新
    pullDownRefresh:true,
    // bs里面的东西启动单机事件
    click:true
  })

  // 监听bs是否滚动到了底部
  bs.on("pullingUp", function () {
    currentPage++
    if(currentPage > totalPages) {
      var nodata = document.querySelector(".noData")
      nodata.style.display = "block"
      setTimeout(function(){
        nodata.style.display = "none"
      },2000)
      return
    }
    getHomeDate(currentPage)
  })

  bs.on("pullingDown",function(){
    console.log("下拉刷新")
    bs.finishPullDown()
    // currentPage = 1
    // getHomeDate(currentPage)

    // 从新获取第一页的数据 把页面种的结构全部删掉
  })


  var backTop = document.querySelector(".backTop")
  // 监听bs的滚动
  bs.on("scroll",function(p){
    backTop.style.display = Math.abs(p.y) > 1500 ? 'block' : 'none'
   
  })
  backTop.onclick = function(){
    bs.scrollTo(0,0,200)
  }


  // 请求首页的数据
  var currentPage = 1
  var content = document.querySelector(".content")

  var totalPages = 0


  function getHomeDate(page) {
    ajax({
      url: baseModel.BASEURL + '/product/pagination',
      params: {
        page: page,
        size: 10
      },
      success: function (res) {
        totalPages = res.data.totalPages
        res.data.data.forEach(function (item) {
          content.insertAdjacentHTML('beforeend', '<div class="item">' +
            '<img src="' + item.cover + '" alt="">' +
            '<h3>' + item.name + '</h3>' +
            '<span>￥' + item.price.toFixed(2) + '</span>' +
            '</div>')


          

          // 让bs重新计算高度
          // bs.refresh()
        })
        var items = document.querySelectorAll(".item")
        items.forEach(function(item){
          item.onclick = function(){
            
            console.log("给每一个做了点击")
          }
        })
        // 等到图片加载完成以后重新计算告诉
        var imgs = document.querySelectorAll("img")
        imgs.forEach(function (item) {
          // 判断图片是否加载完成了
          item.onload = function () {
            // 防抖函数
            bs.refresh()
            // 到底以后告诉bs可以下一次上拉加载了
            bs.finishPullUp()
          }
        })
      }
    })

  }
  getHomeDate(currentPage)
  // 监听是否滚动到底部

})()
