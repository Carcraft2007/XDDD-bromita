const yesBtn = document.getElementById('yesBtn');

function moveYesButton() {
    const maxX = window.innerWidth - yesBtn.offsetWidth - 20;
    const maxY = window.innerHeight - yesBtn.offsetHeight - 20;

    const randomX = Math.random() * Math.max(0, maxX);
    const randomY = Math.random() * Math.max(0, maxY);

    yesBtn.style.position = 'fixed';
    yesBtn.style.left = `${randomX}px`;
    yesBtn.style.top = `${randomY}px`;
    yesBtn.style.zIndex = '999';
}

yesBtn.addEventListener('mouseenter', moveYesButton);
yesBtn.addEventListener('click', (event) => {
    event.preventDefault();
    moveYesButton();
});
