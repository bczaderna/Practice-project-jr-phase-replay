const {db} = require('./server/db')
const {green, red} = require('chalk')
const Artists = require('./server/db/artists')
const Photographs = require('./server/db/photographs')


  const artists = [{
    firstName: 'Walker',
    lastName: 'Evans',
    born: '1903',
  }, {
    firstName: 'Margaret',
    lastName: 'Bourke-White',
    born: '1987',
  }, {
    firstName: 'Ansel',
    lastName: 'Adams',
    born: '1902',
  }, {
    firstName: 'Henri',
    lastName: 'Carter-Bresson',
    born: '1908', 
  }, {
    firstName: 'Andre',
    lastName: 'Kertesz',
    born: '1894',
  }]

  const photographs = [{
    date: 1989,
    name: 'New Mexico',
    place: 'USA',
    price: 500,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg/800px-Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg',
    size: 3.5,
    artistId: 1,
  }, {
    date: 1989,
    name: 'New Mexico',
    place: 'USA',
    price: 500,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg/800px-Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg',
    size: 3.5,
    artistId: 1,
  }, {
    date: 1989,
    name: 'New Mexico',
    place: 'USA',
    price: 500,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg/800px-Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg',
    size: 3.5,
    artistId: 1,
  }, {
    name: 'New Mexico',
    place: 'USA',
    price: 500,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg/800px-Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg',
    size: 3.5,
    artistId: 1,
  }, {
    name: 'New Mexico',
    place: 'USA',
    price: 500,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg/800px-Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg',
    size: 3.5,
    artistId: 1,
  }]

const seed = async () => {
    await db.sync({force: true})

    await Promise.all(artists.map(artist => {
      return Artists.create(artist);
    }))

    await Promise.all(photographs.map(photograph => {
      return Photographs.create(photograph);
    }))

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
