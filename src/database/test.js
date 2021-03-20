const Database = require( './db.js' )
const createUsers = require( './createUser.js' )

Database.then(async db => {
  // inserir dados na tabela
  // await createUsers(db, {
  //   name: 'Anibal Cortez',
  //   age: '15'
  // })

  // consultar dados da tabela
  // const selectedUsers = await db.all('SELECT * FROM users')
  // console.log(selectedUsers)

  // consultar somente 1 usuário pelo id
  // const user = await db.all('SELECT * FROM users WHERE id = "2"')
  // console.log(user)

  // Editar um dado
  // const newUser = await db.all('UPDATE users SET name = "Cruz Roger" WHERE id = "1"')

  // deletar dado da tabela
  // console.log(await db.run( 'DELETE FROM users WHERE id = "1"' )) // Deletar dado por id
  // console.log(await db.run( 'DELETE FROM users' )) // Deletar todos os dados

  // await db.close()
})