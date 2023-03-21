// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(duty = "go to the office") {
    return `This Monday, I will ${duty}.`;
}

function wrapAdjective(special = "*") {
    return function(adjective = "hard worker") {
        return `You are ${special}${adjective}${special}!`
    }
}