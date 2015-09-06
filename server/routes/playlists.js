var playlists = [
    { title: 'Ananas', categorie: 'Fruits et Légumes', description: 'Variété Extra Sweet', detail: '2,05€ (x1)', id: 0, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/25/47/93/5/g-2547935.jpg' },
    { title: 'Avocat', categorie: 'Fruits et Légumes', description: 'Variété Hass', detail: '3,08€ (x2)', id: 1, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/26/50/37/7/g-2650377.jpg' },
    { title: 'Citron vert', categorie: 'Fruits et Légumes', description: 'Le filet de 500g', detail: '2,57€ (x1)', id: 2, image: 'http://static.monoprix.fr/assets/ctx/4248099610/static/photos/87/32/72/g-873272.jpg' },
    { title: 'Banane', categorie: 'Fruits et Légumes', description: 'Les 5 fruits', detail: '1,94€ (x5)', id: 3, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/20/62/54/9/g-2062549.jpg' },
    { title: 'Framboise', categorie: 'Fruits et Légumes', description: 'La barquette de 125g', detail: '2,87€ (x1)', id: 4, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/82/89/6/g-82896.jpg' },
    { title: 'Grenade', categorie: 'Fruits et Légumes', description: 'Unite', detail: '2,47€ (x1)', id: 5, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/25/19/89/7/g-2519897.jpg' },
    { title: 'Badoit Rouge', categorie: 'Boissons', description: 'Les 6 bouteilles de 1L', detail: '4,64€ (x1)', id: 6, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/23/83/57/0/g-2383570.jpg' },
    { title: 'Badoit Verte', categorie: 'Boissons', description: 'Les 6 bouteilles de 1L', detail: '4,39€ (x1)', id: 7, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/23/83/57/1/g-2383571.jpg' },
    { title: 'Badoit Rouge', categorie: 'Boissons', description: 'Les 6 canettes de 33cl', detail: '2,95€ (x1)', id: 8, image: 'http://docs.monoprix.fr/assets/ctx/4248099610/static/photos/26/25/74/9/g-2625749.jpg' },
    { title: 'Evian', categorie: 'Boissons', description: 'Les 6 bouteilles de 1L', detail: '2,98€ (x1)', id: 9, image: 'http://pics.monoprix.fr/assets/ctx/4248099610/static/photos/72/78/58/g-727858.jpg' }
];

exports.findAll = function (req, res, next) {
    res.send(playlists);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(playlists[id]);
};