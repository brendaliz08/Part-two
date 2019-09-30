var eventType = window.prompt("What type of event will you be attending?");
if (eventType = Casual) {
respond1 = "something comfy"
}
else if (eventType = Semi-formal){
respond1 = "a pollo"
}
else if (eventType = Formal){
 respond1 = "a suit"
}
else (eventType = null){
respnd1 = "invalid answer"
}
var tempFahr = window.prompt("What is the temperature outside?");
if (tempFahr > 54) {
respond2 = " a coat"
}
else if (tempFahr = 54< and >70){
respond2 = " a jacket"
}
else if (tempFahr > 70){
 respond2 = " no jacket"
}
else (tempFahr = undefined){
respnd2 = "invalid answer"
}
document.write("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + respond1 + "and" + respond2);
