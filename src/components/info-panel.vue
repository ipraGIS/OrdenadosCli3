<template>
  <div class="infopanel">
    <button ref="botonCategoria" class="boton-categoria" @click="$_infoPanel_botonCategoria">
      <svg style="width:24px;height:24px;vertical-align: sub" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
      <!-- Usando el componente svgpathicon para añadir svg a la app -->
      <!-- <svgpath-icon name="menu" />
      <svgpath-icon name="menu-dot" />-->
    </button>

    <div v-show="showCategoria" ref="panelCategoria" id="panelCategorias" class="listaCategorias">
      <p class="listaCategorias--parrafo">{{ info }}</p>
      <!-- <div v-for="(item, index) in categorias" v-bind:key="item.id">
      <input type="checkbox"  :ref="'checkbox' + index" :id="`checkbox-${index}`" :value="item" v-model.lazy="checked" checked><label>{{item}}</label>
      </div>-->
      <span class="listaCategorias--list" v-for="(item) in categorias" :key="item.id">
        <input
          class="listaCategorias--list--input"
          type="checkbox"
          :checked="item == selectedValue ? true : false"
          v-model="checked"
          :value="item"
        />
        {{item}}
      </span>
    </div>
  </div>
</template>

<script src="./info-panel.js"></script>

<style scoped>
.infopanel {
  top: 50%;
  display: inline;
}
/* BEM: block Element Modifier */
/* dejamos las fuentes sin definir para el diseño responsive*/
.listaCategorias {
  /*font-size: 12px;*/
  display: inline-block;
  margin: 0px;
  padding: 10px;
  left: 20%;
  position: absolute;
  font-size: 0.5em;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: auto;
  background-color: #bdbdbd;
}

.listaCategorias--parrafo {
  margin-top: 0px;
  margin-left: 20px;
  /*font-size: 18px;*/
  text-align: initial;
}

.listaCategorias--list {
  display: flex;
  align-items: center;
}
.listaCategorias--list--input {
  margin: 2px;
}
input[type="checkbox"] {
  transform: scale(1.2);
  margin: 5px;
}
.boton-categoria {
  font-size: 0.5em;
  background-color:#00c853;; /* Green */
  border: 1px solid#00c853;;
  color: white;
  z-index: 2;
  padding: 2px;
  position: absolute;
  left: 20%;
  /* padding: 30px 15px; */
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}
</style>
