let section = document.querySelector('section'),
icons = document.querySelector('.icons')

icons.onclick = () => {
    section.classList.toggle('dark')
};

setInterval(() => {
    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds()

    let d = hour < 12 ? "AM"

})