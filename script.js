const contents = document.querySelectorAll('.content');

const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllItems();
        hideAllContents();
        item.classList.add('active')
        contents[index].classList.add('show')
    })
});

function hideAllItems() {
    listItems.forEach(item => {
        item.classList.remove('active');
    })
}

function hideAllContents() {
    contents.forEach(item => {
        item.classList.remove('show');
    })
}