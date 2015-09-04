var playlists = [
    { title: 'Ananas', description: 'Variété Extra Sweet', detail: '2,05€ (x1)', id: 0, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/25/47/93/5/g-2547935.jpg' },
    { title: 'Avocat', description: 'Variété Hass', detail: '3,08€ (x2)', id: 1, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/26/50/37/7/g-2650377.jpg' },
    { title: 'Citron vert', description: 'Le filet de 500g', detail: '2,57€ (x1)', id: 2, image: 'http://static.monoprix.fr/assets/ctx/4248099610/static/photos/87/32/72/g-873272.jpg' },
    { title: 'Banane', description: 'Les 5 fruits', detail: '1,94€ (x5)', id: 3, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/20/62/54/9/g-2062549.jpg' },
    { title: 'Framboise', description: 'La barquette de 125g', detail: '2,87€ (x1)', id: 4, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/82/89/6/g-82896.jpg' },
    { title: 'Grenade', description: 'Unite', detail: '2,47€ (x1)', id: 5, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/25/19/89/7/g-2519897.jpg' },
    { title: 'Ananas', description: 'Variété Extra Sweet', detail: '2,05€ (x1)', id: 6, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/25/47/93/5/g-2547935.jpg' },
    { title: 'Avocat', description: 'Variété Hass', detail: '3,08€ (x2)', id: 7, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/26/50/37/7/g-2650377.jpg' },
    { title: 'Citron vert', description: 'Le filet de 500g', detail: '2,57€ (x1)', id: 8, image: 'http://static.monoprix.fr/assets/ctx/4248099610/static/photos/87/32/72/g-873272.jpg' },
    { title: 'Banane', description: 'Les 5 fruits', detail: '1,94€ (x5)', id: 9, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/20/62/54/9/g-2062549.jpg' },
    { title: 'Framboise', description: 'La barquette de 125g', detail: '2,87€ (x1)', id: 10, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/82/89/6/g-82896.jpg' },
    { title: 'Grenade', description: 'Unite', detail: '2,47€ (x1)', id: 11, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/25/19/89/7/g-2519897.jpg' },
    { title: 'Ananas', description: 'Variété Extra Sweet', detail: '2,05€ (x1)', id: 12, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/25/47/93/5/g-2547935.jpg' },
    { title: 'Avocat', description: 'Variété Hass', detail: '3,08€ (x2)', id: 13, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/26/50/37/7/g-2650377.jpg' },
    { title: 'Citron vert', description: 'Le filet de 500g', detail: '2,57€ (x1)', id: 14, image: 'http://static.monoprix.fr/assets/ctx/4248099610/static/photos/87/32/72/g-873272.jpg' },
    { title: 'Banane', description: 'Les 5 fruits', detail: '1,94€ (x5)', id: 15, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/20/62/54/9/g-2062549.jpg' },
    { title: 'Framboise', description: 'La barquette de 125g', detail: '2,87€ (x1)', id: 16, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/82/89/6/g-82896.jpg' },
    { title: 'Grenade', description: 'Unite', detail: '2,47€ (x1)', id: 17, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/25/19/89/7/g-2519897.jpg' },
    { title: 'Ananas', description: 'Variété Extra Sweet', detail: '2,05€ (x1)', id: 18, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/25/47/93/5/g-2547935.jpg' },
    { title: 'Avocat', description: 'Variété Hass', detail: '3,08€ (x2)', id: 19, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/26/50/37/7/g-2650377.jpg' },
    { title: 'Citron vert', description: 'Le filet de 500g', detail: '2,57€ (x1)', id: 20, image: 'http://static.monoprix.fr/assets/ctx/4248099610/static/photos/87/32/72/g-873272.jpg' },
    { title: 'Banane', description: 'Les 5 fruits', detail: '1,94€ (x5)', id: 21, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/20/62/54/9/g-2062549.jpg' },
    { title: 'Framboise', description: 'La barquette de 125g', detail: '2,87€ (x1)', id: 22, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/82/89/6/g-82896.jpg' },
    { title: 'Grenade', description: 'Unite', detail: '2,47€ (x1)', id: 23, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/25/19/89/7/g-2519897.jpg' }
];

exports.findAll = function (req, res, next) {
    res.send(playlists);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(playlists[id]);
};