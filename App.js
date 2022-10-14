const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    console.log(second);
    const secondsDegree = ((6 * second) + 90);
    secondHand.style.transition = secondsDegree === 90 ? 'all 0s' : 'all 0.05s';
    secondHand.style['transition-timing-function'] = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const min = now.getMinutes();
    const minsDegree = (6 * min) + 90;
    minHand.style.transition = minsDegree === 90 ? 'all 0s' : 'all 0.05s';
    minHand.style['transition-timing-function'] = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    minHand.style.transform = `rotate(${minsDegree}deg)`

    const hour = now.getHours();
    const hoursDegree = (30 * hour) + 90 + (minsDegree / 12 - 8);
    hourHand.style.transition = hoursDegree === 90 ? 'all 0s' : 'all 0.05s';
    hourHand.style['transition-timing-function'] = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

}

setInterval(setDate, 1000);