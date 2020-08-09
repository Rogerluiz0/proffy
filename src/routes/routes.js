const router = require( 'express' ).Router() 

const { pageLanding , pageStudy , pageGiveClasses, saveClasses , page404 } = require( './../controllers/index.js' )

router.get( '/' , pageLanding )
router.get( '/study' , pageStudy )
router.get( '/give-classes' , pageGiveClasses )
router.post( '/save-classes' , saveClasses )
router.get( '*' , page404 )

module.exports = router