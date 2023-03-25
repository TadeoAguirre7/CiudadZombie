var Jugador = {
  /* el sprite contiene la ruta de la imagen*/
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  moverse: function (a, b) {
    temporalX = this.x;
    temporalY = this.y;
    this.x = a + temporalX;
    this.y = b + temporalY;
    if (a > 0) {
      this.sprite = 'imagenes/auto_rojo_derecha.png'
      this.ancho = 30;
      this.alto = 15;
    } else if (a < 0) {
      this.sprite = 'imagenes/auto_rojo_izquierda.png'
      this.ancho = 30;
      this.alto = 15;
    } else if (b > 0) {
      this.sprite = 'imagenes/auto_rojo_abajo.png'
      this.ancho = 15;
      this.alto = 30;
    } else if (b < 0) {
      this.sprite = 'imagenes/auto_rojo_arriba.png'
      this.ancho = 15;
      this.alto = 30;
    }
  },
  perderVidas:function(cantVidas){
    console.log('tenia ' + this.vidas);
    this.vidas -= cantVidas;
    console.log('le quedan ' + this.vidas);
  }
}