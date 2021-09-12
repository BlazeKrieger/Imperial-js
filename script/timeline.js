const timeline = Object.create(null);

const el = (id) => document.getElementById(id);

const tag = (tag) => document.getElementsByTagName(tag);

const cn = (cl) => document.getElementsByClassName(cl);

var milestones = cn("milestone");



window.addEventListener("DOMContentLoaded", function () {
    timeline.init();
});

timeline.init = function () {  
    for (var i in milestones) {
        cn("date")[i].href = "#" + String(milestones[i].innerText);
        milestones[i].setAttribute("id",String(milestones[i].innerText));
    }
};



export default Object.freeze(timeline);