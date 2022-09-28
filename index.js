const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
          location.href="https://drive.google.com/file/d/1wf-qCCshRdtRwB4Z1jDSvaMA-_hQKnTz/view?usp=sharing"
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})