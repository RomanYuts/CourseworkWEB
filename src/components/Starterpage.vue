<template>
  <div id="Strpage" onload="LoadPage()">
    <Topbar />
    <Sidebar />
    <Contentbar />
  </div>
</template>

<script>

import Topbar from './header.vue'
import Sidebar from './sidebar.vue'
import Contentbar from './content.vue'

export default {
  name: 'app',
  components: {
      Topbar,
      Sidebar,
      Contentbar
  }
}



</script>

<style lang="less">
#Strpage {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
}

</style>
