function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintColor);
    // the frame
    fill(0, 179, 54);
    stroke(0, 143, 43);
    rect(20, 10, 600, 20);
    rect(20, 450, 600, 20);
    rect(10, 11, 20, 440);
    rect(610, 11, 20, 440);
    fill(255, 0, 0);
    stroke(200, 0, 0);
    circle(20, 20, 27);
    circle(20, 460, 27);
    circle(620, 20, 27);
    circle(620, 460, 27);
}

function takeSnapshot() {
    save('swaroopWithFrame:Tint' + tintColor + '.png');
}

function filterTint() {
    tintColor = document.getElementById("colorName").value;
}