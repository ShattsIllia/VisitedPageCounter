function visitLink(path) {
    let count = +window.localStorage.getItem(path);
    if (count) {
        window.localStorage.setItem(path, ++count);
    } else {
        window.localStorage.setItem(path, 1);
    }
}

function viewResults() {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.classList.add(`page${i+1}`);
        li.innerHTML = `You visited Page${i+1} ${window.localStorage.getItem(`Page${i+1}`)} time(s)`;
        ul.appendChild(li);
    }
	window.localStorage.clear();
}