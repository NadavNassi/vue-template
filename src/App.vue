<template>
  <div id="app">
      <!-- YES! Vue knows how to convert camelCase to kebab-case -->
    <main-navbar />
      <!-- so you can choose any convention you'd like -->
    <router-view />
  </div>
</template>

<script>
/// Same with imports, @ is 'src' folder | relative paths are also fine
import MainNavbar from '@/cmps/MainNavbar';

export default {
    name: 'App',
    components: {
        MainNavbar
    }
}
</script>