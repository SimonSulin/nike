window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.scale(3, 3);
    context.beginPath();
    context.moveTo(15, 4);
    context.bezierCurveTo(15, 4, 11.181, 14.419, 13, 17);
    context.bezierCurveTo(14.819, 19.581, 17.525, 23.677, 26, 21);
    context.bezierCurveTo(34.475, 18.323, 96, 1, 96, 1);
    context.bezierCurveTo(96, 1, 23, 35, 23, 35);
    context.bezierCurveTo(23, 35, 11.004, 38.839, 5, 34);
    context.bezierCurveTo(-1.004, 29.161, 2.649, 18.931, 5, 15);
    context.bezierCurveTo(7.351, 11.069, 15, 4, 15, 4);
    context.bezierCurveTo(15, 4, 15, 4, 15, 4);
    context.lineWidth = 1;

    context.strokeStyle = 'white';
    context.stroke();

    context.fillStyle = 'white';
    context.fill();
}