function onload() {
    rain();
}

function rain() {
    var engine = new RainyDay('rainy', 'rainy-bg', window.innerWidth, window.innerHeight, 1, 0);
    engine.gravity = engine.GRAVITY_NON_LINEAR;
    engine.trail = engine.TRAIL_DROPS;
    engine.VARIABLE_GRAVITY_ANGLE = Math.PI / 8;
    engine.rain([
        engine.preset(0, 2, 0.5),
        engine.preset(4, 4, 1)
    ], 50);
}
