function ajax(options) {
    var method = options.method || 'get'
    var url = options.url
    var params = options.params || {}
    var formatParams = ''
    var callback = options.success
    // 准备参数
    for (var key in params) {
        formatParams += '&' + key + "=" + params[key]
    }
    formatParams = formatParams.slice(1)
   return new Promise((reslove, reject) => {

        var xhr = new XMLHttpRequest()

        if (method.toLowerCase() === "get") {
            xhr.open(method, url + "?" + formatParams)
            xhr.send(null)
        } else if (method.toLowerCase() === "post") {
            xhr.open(method, url)
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            xhr.send(formatParams)
        }

        // 接收
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // callback(JSON.parse(xhr.responseText))
                reslove(JSON.parse(xhr.responseText))
            }
        }
    })

}

export default ajax