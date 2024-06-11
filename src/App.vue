<template>
  <HederComponent></HederComponent>
  <router-view></router-view>
</template>

<script>
import HederComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HederComponent
  }
}
</script>

<style lang="scss" scoped>

</style>