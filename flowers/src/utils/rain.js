function strop(cleft, ctop, d) {
    var drop = document.createElement('div');
    drop.className = 'punct';
    drop.style.left = cleft + 'px';
    drop.style.top = ctop + 'px';
    drop.id = d;
    document.getElementById('content').appendChild(drop);
}

function randomFromInterval(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
var n, interval;

var w = window.innerWidth;
var h = window.innerHeight;

function newDrop() {
    var x = randomFromInterval(0, w),
        y = randomFromInterval(10, h / 2);
    strop(x, y, n);
    n--;
    if (n > 0) {
        setTimeout(newDrop, 500);
    }
}

export function start() {
    n = 30;
    newDrop();
    interval = setInterval(function() {
        var drops = document.getElementsByClassName('punct'),
            newY;
        if (drops.length === 0) {
            clearInterval(interval);
            return;
        }
        for (var i = 0; i < drops.length; i++) {
            newY = drops[i].offsetTop + 2;
            if (newY > drops[i].parentNode.offsetHeight) {
                drops[i].parentNode.removeChild(drops[i]);
            }
            else {
                drops[i].style.top = newY + 'px';
            }
        }
    }, 30);
}