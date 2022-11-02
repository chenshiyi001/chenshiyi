import {reqHomeListByPage} from "./api.js"
const btn = document.querySelector("button")
btn.onclick = async function(){
  reqHomeListByPage().then(data => {
    console.log(data,'渲染页面')
  })

   const {data} = await reqHomeListByPage()
   console.log(res)
  //  data.forEach(function(){

  //  })

}

