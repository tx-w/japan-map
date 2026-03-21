// changes the status of a button to active when clicked
const btnClick = document.querySelectorAll('button');

btnClick.forEach((btn) => {
    btn.addEventListener("click", () => {
        btnClick.forEach((btn2) => {
            btn2.classList.remove('active');
        });
        btn.classList.add('active');
    });
});

