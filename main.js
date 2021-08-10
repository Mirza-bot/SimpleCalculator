"use strict"


let display = document.getElementById("display")

let buttons = document.getElementsByClassName("buttons")

let buttonsList = document.querySelectorAll("button").forEach(x => {
    x.addEventListener("click", () => {
        switch (x.innerText) {
            case "←":
                let removed = display.innerText.slice(0, -1)
                display.innerText = removed
                break
            case "=":
                try {
                    let result = eval(display.innerText)
                    display.innerText = result
                }
                catch (e) {
                    display.innerText = "Invalid Input"
                    setTimeout(() => {
                        display.innerText = ""
                    }, 2000);
                }
                break
            case "C":
                display.innerText = ""
                break
            default:
                display.innerText = display.innerText + x.innerText
        }
    })
})