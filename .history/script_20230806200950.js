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

    let d = hour < 12 ? "AM" :"PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? (hour = 12) : hour;

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" +min : min ;

})