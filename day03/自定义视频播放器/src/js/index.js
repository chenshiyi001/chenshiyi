(function () {
  // 请求视频的播放地址
  var w = document.querySelector(".w")
  var loading = document.querySelector(".loding")
  var playBtn = document.querySelector(".left i")
  var total = document.querySelector(".total")
  var current = document.querySelector(".current")
  var curPro = document.querySelector(".curPro")
  var pro = document.querySelector(".pro")

  function isPlay() {
    return playBtn.classList.contains('icon-zanting')
  }

  function formatTime(time) {
    var h = parseInt(time / 3600).toString().padStart(2, 0)
    var m = parseInt(time % 3600 / 60).toString().padStart(2, 0)
    var s = parseInt(time % 3600 % 60).toString().padStart(2, 0)
    return h === "00" ? m + ":" + s : h + ":" + m + ":" + s
  }

  setTimeout(function () {
    // 向后端发送请求获取视频地址
    var videoUrl = './video/fun.mp4'
    // 创建一个视频放入到容器里面
    var videoDom = document.createElement("video")
    videoDom.src = videoUrl
    w.appendChild(videoDom)
    loading.remove()
    // 视频肯定可以播放了  
    videoDom.oncanplay = function () {
      // 获取视频总时长
      var totalTime = this.duration
      total.innerHTML = formatTime(totalTime)
      // 点击播放按钮
      playBtn.onclick = function () {
        // 先判断当前是否处于播放状态
        if (isPlay()) {
          // 正在播放 暂停播放
          this.classList.remove("icon-zanting")
          this.classList.add("icon-24gl-playCircle")
          videoDom.pause()
        } else {
          // 没有播放 播放
          this.classList.add("icon-zanting")
          this.classList.remove("icon-24gl-playCircle")
          videoDom.play()
        }

      }
      // 监听视频播放
      this.ontimeupdate = function () {
        // 获取当前播放到哪了
        current.innerHTML = formatTime(this.currentTime)
        // 设置进度条的长度
        curPro.style.width = this.currentTime / this.duration * 100 + "%"
      }
      // 点击进度条
      pro.onclick = function (e) {
        videoDom.currentTime = e.offsetX / pro.offsetWidth * videoDom.duration
      }
    }


  }, 500)

  // 点击视频播放
  // var playBtn = document.querySelector(".left i")
  // playBtn.onclick = function(){
  //   console.log("点击播放")
  // }

  // 等视频可以播放了才绑定






})()


