const {db} = require('./server/db')
const {green, red} = require('chalk')
const Artists = require('./server/db/artists')
const Photographs = require('./server/db/photographs')


  const artists = [{
    firstName: 'Bianca',
    lastName: 'Czaderna',
    born: '1989'
  // }, {
  //   firstName: 'Saturn Campus',
  //   lastName: 'https://www.google.com/search?tbm=isch&sa=1&ei=X6phXIq_NvKv_Qb66JPYAQ&q=saturn+images&oq=saturn+images&gs_l=img.3..0i67j0l9.187427.188811..188939...0.0..0.76.747.13....3..1....1..gws-wiz-img.......35i39.LU_C-IX3DK0#imgrc=Mv8rdv9eE6n0fM:',
  //   born: 'planet saturn'
  // }, {
  //   firstName: 'Saturn Campus',
  //   lastName: 'https://www.google.com/search?tbm=isch&sa=1&ei=X6phXIq_NvKv_Qb66JPYAQ&q=saturn+images&oq=saturn+images&gs_l=img.3..0i67j0l9.187427.188811..188939...0.0..0.76.747.13....3..1....1..gws-wiz-img.......35i39.LU_C-IX3DK0#imgrc=Mv8rdv9eE6n0fM:',
  //   born: 'planet saturn'
  }]

  const photographs = [{
    date: 1989,
    place: 'USA',
    price: 500,
    imageUrl: 'https://en.wikipedia.org/wiki/Ansel_Adams#/media/File:Ansel_Adams_-_National_Archives_79-AA-Q01_restored.jpg',
    size: 3.5,
    artistId: 1,
  // }, {
  //   date: 'Matt',
  //   place: 'Damon',
  //   price: 'mdamon@gmail.com',
  //   imageUrl: '',
  //   size: 3.5,
  // }, {
  //   date: 'Matt',
  //   place: 'Damon',
  //   price: 'mdamon@gmail.com',
  //   imageUrl: '',
  //   size: 3.5,
  // }, {
  //   date: 'Matt',
  //   place: 'Damon',
  //   price: 'mdamon@gmail.com',
  //   imageUrl: '',
  //   size: 3.5,
  // }, {
  //   date: 'Matt',
  //   place: 'Damon',
  //   price: 'mdamon@gmail.com',
  //   imageUrl: '',
  //   size: 3.5,
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
