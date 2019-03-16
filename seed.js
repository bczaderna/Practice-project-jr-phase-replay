const {db} = require('./server/db')
const {green, red} = require('chalk')
const Artists = require('./server/db/artists')
const Photographs = require('./server/db/photographs')


  const artists = [{
    firstName: 'Walker',
    lastName: 'Evans',
    born: '1903',
    id: 1
  }, {
    firstName: 'Margaret',
    lastName: 'Bourke-White',
    born: '1987',
    id: 2
  }, {
    firstName: 'Ansel',
    lastName: 'Adams',
    born: '1902',
    id: 3
  }, {
    firstName: 'Henri',
    lastName: 'Cartier-Bresson',
    born: '1908', 
    id: 4
  }, {
    firstName: 'Andre',
    lastName: 'Kertesz',
    born: '1894',
    id: 5
  }]

  const photographs = [{
    date: 1973,
    title: 'Jane Rangeley',
    place: 'USA',
    price: 250,
    imageUrl: 'https://i.guim.co.uk/img/media/d09d05675e2d26bea11a1bad2fb2e778cf755862/0_0_1238_2072/master/1238.jpg?width=300&quality=85&auto=format&fit=max&s=5b2292de7ab994c5dc2d80fef27d07ba',
    size: 3.5,
    artistId: 3,
  }, {
    date: 1954,
    title: 'The Tetons and the Snake River',
    place: 'USA',
    price: 400,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Adams_The_Tetons_and_the_Snake_River.jpg',
    size: 5.0,
    artistId: 3
  },{
    date: 1935,
    title: 'Allie Mae Boroughs',
    place: 'USA',
    price: 700,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Allie_Mae_Burroughs_print.jpg/220px-Allie_Mae_Burroughs_print.jpg',
    size: 3.5,
    artistId: 1,
  }, {
    date: 1941,
    title: 'Penny',
    place: 'USA',
    price: 500,
    imageUrl: 'https://timedotcom.files.wordpress.com/2012/08/moma_weap_i_10.jpg?quality=85&w=838',
    artistId: 1
  }, {
    date: 1937,
    title: 'Kentucky Flood',
    place: 'USA',
    price: 400,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Kentucky_Flood_by_Margaret_Bourke-White.jpg/220px-Kentucky_Flood_by_Margaret_Bourke-White.jpg',
    size: 4.5,
    artistId: 2,
  }, {
    date: 1943,
    title: 'The Train',
    place: 'USA',
    price: 350,
    imageUrl: 'http://www.yellowdoorartmarket.com/.a/6a0134868a53d2970c01bb09d71022970d-800wi',
    size: 6.0,
    artistId: 2
  }, {
    date: 1942,
    title: 'Fishing',
    place: 'USA',
    price: 350,
    imageUrl: 'http://redfilmnoir.weebly.com/uploads/5/9/0/3/5903732/henry22_1.jpg',
    artistId: 4
  },{
    date: 1904,
    title: 'New Mexico',
    place: 'USA',
    price: 500,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg/800px-Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg',
    size: 3.5,
    artistId: 4,
  }, {
    date: 1984,
    title: 'The Greeting',
    place: 'USA',
    price: 800,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Andr%C3%A9_Kert%C3%A9sz_1984_Bp.jpg',
    size: 3.5,
    artistId: 5,
  }, {
    date: 1980,
    title: 'Reading',
    place: 'USA',
    price: 500,
    imageUrl: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/7/22/1248271920994/Andre-Kertesz-young-man-s-004.jpg?width=700&quality=85&auto=format&fit=max&s=ee7c65f10529430a1f89fba63d262476',
    size: 4.0,
    artistId: 5
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
