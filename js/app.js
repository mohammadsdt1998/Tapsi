var boxes = document.getElementsByClassName('tapsi-service-post');

var currentIndex = 0;

function showNextMenu() {
    boxes[currentIndex].style.display = 'none';
    currentIndex = (currentIndex+1)%boxes.length;
    boxes[currentIndex].style.display = 'block';
}

setInterval(showNextMenu,3000);
