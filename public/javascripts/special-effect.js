var textWrapper = document.querySelector('.text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.text .letters',
        scale: [0, 1],
        duration: 3000,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
    }).add({
    targets: '.text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
});