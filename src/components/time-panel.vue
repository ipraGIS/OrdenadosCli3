<template>
  <div class="block" v-bind:class= "{ 'block--normal':(!isParpadea && !hasError), 'block--parpadea': isParpadea, 'block--finish': hasError   }">
    <button class="boton boton--tooltip" v-show="!cuenta" v-on:click="$_time_start">INICIO
      <!-- <span class="boton--tooltiptext">Inicia Juego</span> -->
    </button>
    <div v-show="cuenta">
      <div>{{time}}</div>
    </div>
  </div>
</template>

<script src="./time-panel.js"></script>

<style scoped>
.block {
  display: inline-flex;
  position: relative;
 /* font-size: 16px;*/
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 150px;
  height: 150px;
  color: #fff;
  -webkit-border-radius: 75px;
  -moz-border-radius: 75px;
  border-radius: 50%;
}

.block--normal {
  /*background-color: #4caf50; /* Green */
  background-color: red; /* Green */
  

}
.block--parpadea {
  background-color: rgb(51, 255, 0);
}
.block--finish {
  /*background-color: red;*/
  display:none;
}

.boton {
  font-size: 0.8em;
  background-color: #00c853; /* Green */
  border: 1px solid  #00c853 ;
  color: white;
  padding: 0;
  margin: 30px -10px;
  width: 150px;
  height: 150px;
  /* padding: 30px 15px; */
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}
.boton:hover {
  cursor: pointer;
}

.boton--tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.boton--tooltip .boton--tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #808080;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
  border-radius: 6px;
  cursor: default;
  margin: 30px -30px;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.boton--tooltip:hover .boton--tooltiptext {
  visibility: visible;
}
</style>
