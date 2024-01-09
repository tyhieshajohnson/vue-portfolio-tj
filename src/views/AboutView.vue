<template>
<div class="vh-100">
    <!-- Navigation Bar -->
    <NavigationBar/>
  <!-- Body -->
  <div class="body">
    <div class="about-information" id="about-information">

    </div>
  </div>
</div>
</template>

<!-- JavaScript -->
<script>
import NavigationBar from '@/components/Reusables/Navigation.vue'

export default {
  name: 'HomeView',
  components: {
    NavigationBar
  }
}
</script>

<!-- CSS -->
<style scoped>
/* Body */
.body {
    background-color: #202020;
 }

.nav-links {
    display: flex;
    flex-flow: row nowrap;
    margin-right: 30px;
 }

/* About Information Div */
#about-information {
  width: 1307px;
  height: 836px;
  border-radius: 24px;
  background-color: #3B3B3B;
}

.about-information div{
 margin-top: 50px;
}
</style>
