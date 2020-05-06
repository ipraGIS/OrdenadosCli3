import svgpathicon from './SvgPathIcon.vue';
export default {
  components: {
    "svgpath-icon": svgpathicon
  },
  name: 'info-panel',
  data() {
    return {
      info: 'Seleccione una categoría ',
      categorias: [],
      checked: [],
      selectedValue: 'animales',
      showCategoria: true
    }
  },
  mounted() {
    // addEventListener('json-loaded', test.bind(this), false); // Asi el navegador hace una copia en memoria y en caso de querer eliminarlo con removeEventListener no 'funciona'
    const that = this;
    addEventListener('json-loaded', jsonHandlerInfo, false);
    function jsonHandlerInfo(evt) {
      that.$_infoPanel_addCategorias.apply(that, [evt]);
    }
    this.$root.$on('reset-game', this.$_infoPanel_muestra.bind(this));
    addEventListener('oculta-categorias', this.$_infoPanel_oculta.bind(this), false);
  },
  watch: {
    checked: {
      handler: function () {
        this.$root.$emit('categoria-modificada', this.checked);
        if (this.checked.length > 1) {
          this.checked.shift();
        }

      },
      deep: false
    },
    categorias: {
      handler: function () {
        this.checked = [this.categorias[0]] // por defecto la primera categoría es la chequeada.
      }
    }
  },
  methods: {
    $_infoPanel_addCategorias(e) {
      if (!e.detail || !e.detail.categoria || this.categorias.length > 0) {
        return;
      }
      const listadoJson = e.detail.categoria;
      for (const i in listadoJson) {
        this.categorias.push(i.toUpperCase());
      }
    },

    $_infoPanel_muestra() {
      if (this.$refs.panelCategoria) {
        this.$refs.panelCategoria.style.display = "inline-block";
      }
    },
    $_infoPanel_oculta() {
      if (this.$refs.panelCategoria) {
        this.$refs.panelCategoria.style.display = "none";
      }
    },
    $_infoPanel_botonCategoria() {
      this.showCategoria = !this.showCategoria;
    }

  }
}
