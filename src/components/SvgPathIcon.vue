<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path :d="path" />
  </svg>
</template>

<script>
const icons = {
  "menu-dot":
    "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",
    "menu":"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
};
export default {
  props: {
    name: String
  },
  computed: {
    path() {
      return icons[this.name];
    }
  }
};
</script>