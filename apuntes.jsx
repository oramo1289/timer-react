onButtonClick: function (e) {//funcion creada por mi
  e.preventDefault();//para evitar que refresque la página despues de enviar el formulario, lo qe uqeremos es que solo refresque una sección de lapágina tipo AJAX

  var nameRef =  this.refs.name;
  var name = nameRef.value;//acceder al valor de la propiedad ref cuyo nombre es hName
  nameRef.value = '';//para que se limpie el input despues de cada submit

  if (typeof name === 'string' && name.length > 0) {
    this.setState({
      name: name //name de state.name de abajo va a ser igual a var name que esta arriba
    });
  }

}
