const timeline = Object.create(null);

const el = (id) => document.getElementById(id);

const tag = (tag) => document.querySelector(tag);

const cn = (cl) => document.getElementsByClassName(cl);

var milestones = cn("milestone");

window.addEventListener("DOMContentLoaded", function () {
    timeline.init();
});

timeline.init = function () {
    prompt("clicked on body");
    for (let i = 0, mlen = milestones.length; i < mlen; i++) {
        tag(li).href = "#" + String(milestones[i]);
    }
}



export default Object.freeze(timeline);