function lagRessursHTML(ressurs) {
    return `
        <article class="resource-tab">
            <h3>${ressurs.category}</h3>
            <p>${ressurs.text}</p>
            <nav>
                <ul>
                    ${ressurs.sources.map((source) => `
                        <li>
                            <a href="${source.url}" target="_blank">${source.title}</a>
                        </li>
                    `).join('')}
                </ul>
            </nav>
        </article>
    `;
}

function visRessurser(kategori) {
    console.log(`Viser ressurser for kategori: ${kategori}`); 

    const filtrerteRessurser = resources.filter(ressurs => ressurs.category === kategori);

    const ressursListe = document.getElementById('ressurs-liste');
    
    
    ressursListe.innerHTML = '';

    filtrerteRessurser.forEach(ressurs => {
        const ressursHTML = lagRessursHTML(ressurs);
        ressursListe.innerHTML += ressursHTML;
    });
}

document.querySelectorAll('.kategori-liste a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const kategori = link.getAttribute('data-kategori');

        document.querySelectorAll('.kategori-liste a').forEach(a => a.classList.remove('active'));

        link.classList.add('active');
        visRessurser(kategori);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    visRessurser("HTML");
    document.querySelector('.kategori-liste a[data-kategori="HTML"]').classList.add('active');
});
