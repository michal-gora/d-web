function blowOut() {
    const flame = document.getElementById('flame');
    const wick = document.getElementById('wick');
    const candleScene = document.getElementById('candle-scene');
    const cardScene = document.getElementById('card-scene');

    // Hide the flame (it will shrink to nothing)
    flame.classList.add('blown-out');

    // Wait 1 second, then fade out the whole scene
    setTimeout(() => {
        candleScene.classList.add('hide-scene');
        cardScene.classList.remove('hide-scene');
    }, 1000);
}