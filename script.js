const levels = [
    { answer: 'nebula', video: 'hubble.mp4' },
    { answer: 'hubble', video: 'jameswebb.mp4' },
    { answer: 'jameswebb', video: 'proplyd.mp4' },
    { answer: 'proplyd', video: ''}
];


function check(event) {
    event.preventDefault();
    let score = document.getElementById('score');
    let level = document.getElementById('level'); 
    const inputValue = event.target.userAnswer.value;
    const video = document.getElementById('videoPlayer');
    const currentLevel = Number(level.value) - 1;

    if (currentLevel < levels.length && inputValue == levels[currentLevel].answer) {
        alert("Good job! answer correct keep going");
        score.value = Number(score.value) + 1;
        level.value = Number(level.value) + 1; // Move to next level

        if (levels[currentLevel].video) {
            video.children[0].src = levels[currentLevel].video;
            video.load();
        }
    } else {
        score.value = Number(score.value) - 1;
        alert("LoL incorrect");
    }

    // return false;//
}