'use script'



function init(){
    onChangeColors();
}

function onSetInfo(){
    var elusername = document.querySelector('.user-name').value;
    var elEmail = document.querySelector('.email').value;
    var elAge = document.querySelector('.age').value;
    var elDate = document.querySelector('.date').value
    var elTime = document.querySelector('.time').value    
    var elBcgColor = document.querySelector('.bcg-color').value
    var elTxtColor = document.querySelector('.txt-color').value        
    var user = createUser(elusername, elEmail, elAge, elBcgColor, elTxtColor,elDate,elTime)
    saveUserInfoToStorage(user);   
}


function onChangeColors(){
    var user = getUserFromStorage();
    if(!user) return;
    var bcgColor = user.bcgColor;
    var txtColor = user.txtColor;
    var homePage = document.querySelector('.homepage');
    homePage.style.backgroundColor = bcgColor;
    homePage.style.color = txtColor;
}

function onSetforecast(){
    var user = getUserFromStorage();
    if(!user.birthDay || !user.timeOfBirth){
        alert('Tel me your birth details');
        return;
    } 
    var forCast =  getForcast();
    var elCastHeader = document.querySelector('.cast-header');
    elCastHeader.innerText = 'Your personal astrological forecast'
    var elCast = document.querySelector('.cast');
    elCast.innerText = forCast
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

