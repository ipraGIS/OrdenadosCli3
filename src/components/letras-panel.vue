<template>
  <div class="letrasPanel">
    <div v-if="visible" class="letrasDesord">
      <h1>
        <span v-for="letra in letras" :key="letra.id">
          <span id="letra" v-if="letra !== ','">{{letra}}</span>
          <span class="letraOculta" v-else></span>
        </span>
      </h1>
    </div>
    <br><br><br>
    <div v-if="visible" id="letrasOrd">
      <h1 class="solucion" v-if="solucion">
        <span v-for="letra in letrasOrdenadas" :key="letra.id">
          <span id="letraSolucion" v-if="letra !== ','">{{letra}}</span>
          <span class="letraOculta" v-else></span>
        </span>
      </h1>
    </div>
  </div>
</template>

<script src="./letras-panel.js"></script>

<style scoped>

.letrasPanel {
  position: absolute;
  bottom: 5%;
  left: 50%;
  margin-right: -50%;
  /*font-size: 10px;*/
  height: auto;
  transform: translate(-50%, -50%);
} 
.letrasDesord {
   margin-top: 20px;
   padding: 10px;
}

#letrasOrd {
   margin-top: 20px;
   padding: 10px;
}

.letrasDesord h1 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

#letrasOrd h1 {
  margin: 0;
  position: absolute;
  top: 100%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

#letra {
  background-color: #616161;
  padding: 10px;
  border: 0px solid #808080;
  margin: 10px;
  color: #fff;
}

#letraSolucion {
  background-color: #cd5c5c;
  padding: 10px;
  border: 0px solid #808080;
  margin: 10px;
  color: #fff;
}

.letraOculta {
  background-color: transparent;
  padding: 10px;
  border: 0px solid #000;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
