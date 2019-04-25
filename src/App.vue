<template>
  <div id="app">
    <router-view name="login"></router-view>
    <template v-if="$route.path!=='/login'">
      <topnav></topnav>
      <div class="main">
        <menunav></menunav>
        <div class="right">
          <transition mode="out-in" name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import topnav from './components/topnav';
import menunav from './components/menunav';
export default {
  name: 'app',
  components: { topnav, menunav }
};
</script>
