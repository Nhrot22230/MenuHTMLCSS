
let labelID = 'modulo1'

let but1ID = 'modulo2'
let but2ID = 'modulo3'

let dropMenu = document.getElementById("modulo-dropmenu")
let dropLabel = document.getElementById("modulo-controller")

function showDropDown() {
    dropMenu.classList.toggle('not-visible')
}

function showModulo(buttonId){
    let optionSelected = document.getElementById(buttonId)
    let optionText = optionSelected.textContent
    
    optionSelected.textContent = dropLabel.textContent
    dropLabel.textContent = optionText

    let moduloContainer = document.getElementById(labelID)
    moduloContainer.classList.toggle('not-visible')

    if(buttonId == 'drop1') {
        let temp = labelID
        labelID = but1ID
        but1ID = temp
    }

    if(buttonId == 'drop2') {
        let temp = labelID
        labelID = but2ID
        but2ID = temp
    }

    moduloContainer = document.getElementById(labelID)
    moduloContainer.classList.toggle('not-visible')
}