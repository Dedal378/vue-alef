<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheMain from './TheMain.vue'
</script>

<template>
  <TheHeader />
  <TheMain />
  <TheFooter />
  <!--<BaseCard>
          <Userinfo />
        </BaseCard>-->
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
