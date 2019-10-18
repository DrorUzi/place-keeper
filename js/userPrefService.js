'use script'

const USER_PREF = 'colors';
const USER_INFO = 'info'


function saveColorsToStorage(userPref){
    saveToStorage(USER_PREF,userPref);
}


function saveInfoToStorage(userInfo){
    saveToStorage(USER_INFO,userInfo);
}

function getColorsFromStorage(){
   return loadFromStorage(USER_PREF) 
}


function getForCast(){
    var forCasts = [
        `Today, sharing your hopes and wishes with friends shouldn't make you feel embarrassed—it should make you feel proud! Sure, you have some huge goals to reach—but for some people, just aiming high is impressive enough. You and your buddies might not quite be on the same page, but that only makes things more interesting for all of you. Embrace your differences by asking them what their hopes and wishes are—then turn the tables and let them share with you. It will bring everyone closer.`,
        `You have a gentle way of expressing yourself to your loved one. It isn't your style to make grand gestures or buy extravagant gifts. You prefer to spend quality time together, talking and cuddling. Today you may be in an unusually romantic mood and confess the depth of your feelings. This will have just the effect you hope for!`,
        `The love you feel for everyone today draws new people into your orbit. You're in love with all, even people you couldn't stand yesterday. If you're in sales or a field that puts you in contact with many people, you can expect extraordinary success. People will do whatever it takes and pay any amount of money to connect with you. This applies to your personal life, too.`
    ]
    var randCast = forCasts[Math.floor(Math.random() * forCasts.length)]
    return randCast
}