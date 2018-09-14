// import { obj } from './test';

document.addEventListener('DOMContentLoaded', function() {

    //tutaj skrypty

    //MODAL 
    let figureFirst = document.getElementById("figure-1");
    let figureSecond = document.getElementById("figure-2");
    let modalFirst = document.getElementById("modal-1");
    let modalSecond = document.getElementById("modal-2");
    let closeFirst = document.getElementById("close-1");
    let closeSecond = document.getElementById("close-2");

    figureFirst.onclick = function() {
        modalFirst.style.display = "flex";
    }
    closeFirst.onclick = function() {
        modalFirst.style.display = "none";
    }

    figureSecond.onclick = function() {
        modalSecond.style.display = "flex";
    }
    closeSecond.onclick = function() {
        modalSecond.style.display = "none";
    }

    window.onclick = function(event1) {
        if (event1.target == modalFirst) {
            modalFirst.style.display = "none";
        }
        else if (event1.target == modalSecond) {
            modalSecond.style.display = "none";
        }
    }
});