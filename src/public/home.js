async function onContentLoaded() {
    const response = await fetch('/vinyls');
    const vinyls = await response.json();

    vinyls.forEach(vinyl => {
        insertAlbumPanel(vinyl);
    });
}

function insertAlbumPanel(vinyl) {
    const div = document.createElement('div');
    const strong = document.createElement('strong');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const main = document.getElementById('main');
    strong.innerText = vinyl.title;
    p.innerText = vinyl.artist;
    div.classList.add('vinyl', 'flex', 'flex-column', 'panel');
    img.classList.add('cover');
    img.src = 'placeholder.jpg';
    img.alt = 'Cover placeholder';
    div.appendChild(strong);
    div.appendChild(p);
    div.appendChild(img);
    main.appendChild(div);
}

window.addEventListener('DOMContentLoaded', () => {
    onContentLoaded();
});
