<template>
  <div id="app">
    <div class="titulos">
      <h1>{{title}}</h1>
      <p style="word-spacing: 0px;">{{subtitle}}</p>
      <time-panel></time-panel>
      <button class="boton reset" id="botonReset" v-on:click="$_reset">NUEVA</button>
      <info-panel></info-panel>
      <button class="boton solve" id="botonSolve" v-on:click="$_solve">VER</button>
    </div>
    <letras-panel></letras-panel>  
  </div>
</template>

<script>
import infoPanel from "./components/info-panel.vue";
import timePanel from "./components/time-panel.vue";
import letrasPanel from "./components/letras-panel.vue";

export default {
  components: {
    "info-panel": infoPanel,
    "time-panel": timePanel,
    "letras-panel": letrasPanel
  },

  name: "app",
  data() {
    return {
      title: "Ordenando",
      categoria: "",
      segundos: 10, // valor por defecto
      subtitle:"",
      jsonData: {}
    };
  },
  created() {
    fetch("assets/textos.json")
      .then(res => res.json())
      .then(myjson => {
        if (myjson.todas) {
          // si tiene configurado, todas == true => añado una nueva categoría mezcla de todas
          const mix = [];
          for (const i in myjson.categoria) {
            for (const j of myjson.categoria[i]) {
              mix.push(j);
            }
          }
          myjson.categoria.todas = mix;
        }
        let evt = document.createEvent("CustomEvent");
        evt.initCustomEvent("json-loaded", false, false, myjson);
        window.dispatchEvent(evt);
      });
  },
  mounted() {
    const that = this;
    addEventListener("json-loaded", jsonHandler, true);
    let subtitleInicio;
    function jsonHandler(evt) {
      if (!evt.detail || !evt.detail.segundos) return;
      that.segundos = evt.detail.segundos;
      that.subtitle = `Tienes ${that.segundos} segundos para adivinar de qué ${that.categoria} se trata...`;
      subtitleInicio = that.subtitle;
    }
    that.$root.$on("finish-time", function() {
      that.subtitle = "¿ Quieres jugar de nuevo ?";
      document.getElementById("botonReset").style.display = "inline";
      document.getElementById("botonSolve").style.display = "none";
    });
    that.$root.$on("reset-game", function() {
      that.subtitle = subtitleInicio;
    });

    that.$root.$on("categoria-modificada", that.$_updateSubtitle.bind(that));
  },
  methods: {
    $_reset(e) {
      if (e && e.target) e.target.style.display = "none";
      this.$root.$emit("reset-game");
    },
    $_solve() {
      this.$root.$emit("solve-word");
    },
    $_updateSubtitle(categoria) {
      if (!categoria) return;
      this.categoria = categoria;
      this.subtitle = `Tienes ${this.segundos} segundos para adivinar de qué ${this.categoria} se trata...`;
    }
  }
};
</script>
<style>
body {
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}

.boton {
  position: relative;
  font-size: 0.8em;
  display: none;
  border: none;
  color: white;
  font-weight: bold !important;
  text-align: center !important;
  text-decoration: none !important;
  width: 150px;
  height: 150px;
  color: #fff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.reset {
  background-color: #00c853;; /* Green */
  border: 1px solid #00c853;
  top: -10px;
}

.solve {
  background-color: #cd5c5c;
  border: 1px solid #cd5c5c;
  bottom: 1px;
}

.titulos {
  text-align: center;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
/* USO DE MEDIA QUERIES PARA DISEÑO RESPONSIVE */

/* Smartphones (portrait) ----------- */
@media only screen and (min-width: 359px) {
  body {
    background-color:beige;
    font-size: 50px;
  }
}

/*Smartphones (landscape) -----------*/
@media only screen and (min-height: 321px) and (orientation: landscape) {
  body {
    background-color: green;
    font-size: 30px;
  }
}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {
  body {
    background-color: yellow;
    font-size: 25px;
  }
}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
  body {
    background-color: orange;
    font-size: 20px;
  }
}

/* Landscape phones and down */
@media (max-width: 480px) {
  body {
    background-color: purple;
    font-size: 25px;
  }
}

@media (min-width: 1120px) {
  body {
    background-color: white;
    font-size: 30px;
  }
}
</style>
