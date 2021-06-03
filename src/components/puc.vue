<template>
<div id="puc">
  <Header />
  <sidebar />
  <span id="message-block">
    <h1>Page under construction</h1>
  </span>
</div>
</template>

<script>

import Header from '@/components/header'
import sidebar from '@/components/sidebar'

export default {
  name: 'puc',
  components: {
    Header,
    sidebar
  }
}


</script>

<style lang="less">
#puc {
  border: 0;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
}



</style>
