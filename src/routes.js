const router = require( 'express' ).Router() 

const { pageLanding , pageStudy , pageGiveClasses, saveClasses } = require( './controller/index.js' )

router.get( '/' , pageLanding )
router.get( '/study' , pageStudy )
router.get( '/give-classes' , pageGiveClasses )
router.post( '/save-classes' , saveClasses )

module.exports = router