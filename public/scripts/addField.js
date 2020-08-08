document.querySelector( '#add-time' ).addEventListener( 'click' , cloneField )

function cloneField () {
  const newFieldsContainer = document.querySelector( '.schedule-item' ).cloneNode( true )
  const fields = newFieldsContainer.querySelectorAll( 'input' )
  
  fields.forEach( ( field ) => {
    field.value = ''
  } )
  
  document.querySelector( '#schedule-items' ).appendChild(newFieldsContainer)
}