document.addEventListener("DOMContentLoaded", initialize)

function initialize(){
    const $screen = document.querySelector("#screen")
    const $buttons = document.querySelectorAll("span")

    document.addEventListener("keydown", event => {
        console.log(event.key)
    })

    const actions = {
        "=": function(){
            $screen.textContent = eval($screen.textContent)
        },
        "C": function(){
            $screen.textContent = ""
        },
        "x": function(){
            if (isNumber(getLastCharacter($screen.textContent))){
                $screen.textContent += "*"
            }
        },
        "+": function(){
            if (isNumber(getLastCharacter($screen.textContent))){
                $screen.textContent += "+"
            }
        },
        "default": function(character){
            $screen.textContent += character
        }
    }

    $buttons.forEach($button => {
        $button.addEventListener("click", event => {
            actions[event.target.textContent]
                ? actions[event.target.textContent]()
                : actions["default"](event.target.textContent)
        })
    })
}

function getLastCharacter(string){
    return string
        ? string[string.length - 1]
        : null
}

function isNumber(character){
    return character.match(/[1-9]/)
}
