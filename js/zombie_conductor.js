/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion/*, parametro/s extra de ZombieConductor*/) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  this.direccion=direccion;
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;
/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover= function(){
    /* Si la dirección es vertical se le aplica velocidad en el eje Y */
    if (this.direccion == "v") {
      this.y += this.velocidad;
    }
    /* Si la dirección es horizontal se le aplica velocidad en el eje X */
    if (this.direccion == "h") {
      this.x += this.velocidad;
    }
  
    /* Invierto la direccion cuando llega a uno de los lados*/
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
      this.velocidad *= -1;
    }
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
      this.velocidad *= -1;
    }
}
  ZombieConductor.prototype.atacar = function(jugador) {
    jugador.perderVidas(jugador.vidas);
  };