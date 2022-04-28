function getAlquran(){
    fetch('https://equran.id/api/surat/2')
        .then(response => response.json())
        .then( surat => {
            // Nama Surat
            const namaSurat = document.querySelector('.nama-surat');
            namaSurat.innerHTML = `<strong> <span>${surat.nomor}.</span> ${surat.nama_latin}</strong><span> (${surat.jumlah_ayat} ayat)</span>`;

            console.log(surat);
            // isi Surat
            const isiSurat = surat.ayat
            let cardSurat = ``;
            isiSurat.forEach( s => {
                cardSurat += `
                <div class="isi">
                <div class="arab">${s.ar}</div>
                <div class="arab">${s.tr}</div>
                <div class="terjemah"> <span>${s.nomor}. </span> ${s.idn} </div>
                <hr>
                </div>
                `;
            });
            const cardSura = document.querySelector('.isi-surat');
            cardSura.innerHTML = cardSurat;

        });
}

getAlquran();