async function onContentLoaded() {
    const response = await fetch('/vinyls');
    const vinyls = await response.json();

    vinyls.forEach(element => {
        const div = document.createElement('div');
        const strong = document.createElement('strong');
        const p = document.createElement('p');
        const img = document.createElement('img');
        const main = document.getElementById('main');
        const title = document.createTextNode(element.title);
        const artist = document.createTextNode(element.artist);
        div.classList.add('vinyl', 'flex', 'flex-column', 'panel');
        img.classList.add('cover');
        img.src = 'placeholder.jpg';
        img.alt = 'Cover placeholder';
        div.appendChild(strong);
        strong.appendChild(title);
        div.appendChild(p);
        p.appendChild(artist);
        div.appendChild(img);
        main.appendChild(div);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    onContentLoaded();
});
