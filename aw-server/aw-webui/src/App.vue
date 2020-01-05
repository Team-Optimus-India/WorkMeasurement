<template lang="pug">
div#wrapper
  aw-header

  div.container.aw-container.my-3.py-3
    error-boundary
      router-view

  div.container(style="color: #555")
    div(style="float: left")
</template>

<script>
// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/brands/twitter';
import 'vue-awesome/icons/brands/github';

export default {
  data: function() {
    return {
      activityViews: [],
      info: {},
    }
  },

  mounted: async function() {
    this.$aw.getInfo().then(
      (info) => {
        this.info = info;
      },
      (e) => {
        console.error("Unable to connect: ", e)
        this.info = {};
      }
    );
  }
}
</script>

<style lang="scss">
$textcolor: #000;

html, body, button {
  color: $textcolor;
  font-family: 'Varela Round', sans-serif !important;
}

body {
  background-color: #EEE;
}

.fa-icon {
  margin-top: -0.125em;
  margin-left: 4px;
  margin-right: 4px;
  vertical-align: middle;
}

.aw-container {
  background-color: #FFF;
  border: 1px solid #CCC;
  border-radius: 5px 5px 5px 5px;
}
</style>
