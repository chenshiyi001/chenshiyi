import {requestbyHomepage} from "./api.js"

document.querySelector("button").onclick = function () {
    requestbyHomepage().then((data) => {
        console.log(data)
    })

}