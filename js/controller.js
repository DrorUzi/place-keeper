'use script'



function init(){
    onChangeColors();
}

function onSetInfo(){
    var elBcgColor = document.querySelector('.bcg-color').value
    var elTxtColor = document.querySelector('.txt-color').value
    var userPrefs = {
        txtColor:elTxtColor,
        bcgColor:elBcgColor
    }
    saveColorsToStorage(userPrefs);   
}



function onChangeColors(){
    var colors = getColorsFromStorage();
    if(!colors) return;
    var bcgColor = colors.bcgColor;
    var txtColor = colors.txtColor;
    var homePage = document.querySelector('.homepage');
    homePage.style.backgroundColor = bcgColor;
    homePage.style.color = txtColor;
}

function onSetforecast(){
    var elDate = document.querySelector('.date').value
    var ElTime = document.querySelector('.time').value    
    var userInfo = {
        birthDay: elDate,
        timeOfBirth: ElTime
    }
    saveInfoToStorage(userInfo);
    if(!ElTime || !elDate) return
    var forCast =  getForCast();
    var elCast = document.querySelector('.cast');
    elCast.innerHTML = forCast

}

function onSubmit(ev){
    ev.preventDefault();
}

function onInputChange(){
    document.querySelector('.change-color').focus();
}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}