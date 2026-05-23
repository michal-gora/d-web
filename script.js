body {
    background-color: #f0ead6; /* Warm, paper-like background */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
}

/* --- CUPCAKE & CANDLE SCENE --- */
#candle-scene {
    text-align: center;
    cursor: pointer; /* Lets the user know it's clickable */
    transition: opacity 1s ease; /* Fades out the whole scene when done */
}

.cupcake {
    position: relative;
    width: 150px;
    height: 200px;
    margin: 40px auto;
}

/* The Cup wrapper */
.cup {
    position: absolute;
    bottom: 0;
    left: 25px;
    width: 100px;
    height: 70px;
    background-color: #ff99cc; /* Pink cup */
    border-radius: 10px 10px 40px 40px;
}

/* The Frosting */
.frosting {
    position: absolute;
    bottom: 60px;
    left: 10px;
    width: 130px;
    height: 60px;
    background-color: #fff; /* White frosting */
    border-radius: 50px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}

/* The Candle */
.candle {
    position: absolute;
    bottom: 110px;
    left: 65px;
    width: 20px;
    height: 60px;
    background-color: #aae0ff; /* Blue candle */
    border-radius: 4px;
}

/* The Flame */
.flame {
    position: absolute;
    bottom: 175px;
    left: 65px;
    width: 20px;
    height: 35px;
    background-color: #ffaa00;
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 0 15px #ffaa00, 0 0 30px #ff5500;
    animation: flicker 0.15s infinite alternate;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Flame animation */
@keyframes flicker {
    0% { transform: scale(1) rotate(-2deg); }
    100% { transform: scale(1.1) rotate(2deg); }
}

/* The class we add via JS to blow out the flame */
.blown-out {
    opacity: 0 !important;
    transform: scale(0) !important;
}

/* Utility class to hide elements */
.hide-scene {
    display: none !important;
}


/* --- POLAROID SCENE --- */
#card-scene {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeIn 1.5s ease; /* Fades in when revealed */
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.polaroid {
    background: white;
    padding: 15px 15px 60px 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transform: rotate(-3deg); /* Slightly uneven rotation */
    position: relative;
    width: 300px;
    margin: 0;
}

.polaroid img {
    width: 100%;
    height: auto;
    display: block;
    background-color: #eee; /* Placeholder color if image takes time to load */
}

.polaroid figcaption {
    font-family: 'Just Another Hand', cursive;
    font-size: 2.5rem;
    text-align: center;
    margin-top: 15px;
    color: #333;
}

/* The Tape holding the photo */
.tape {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%) rotate(2deg);
    width: 100px;
    height: 30px;
    background-color: rgba(255, 255, 200, 0.7); /* translucent tape */
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    z-index: 10;
}

.card-text {
    font-family: 'Just Another Hand', cursive;
    font-size: 2.5rem;
    text-align: center;
    margin-top: 30px;
    transform: rotate(1deg); /* Slightly uneven text rotation */
}