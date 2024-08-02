function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('cyan');
}

function modelLoaded() {
    console.log('Posenet is Initialized!')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}