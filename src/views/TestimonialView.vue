<!-- HTML -->
<template>
  <div>
    <!-- Navigation Bar -->
    <NavigationBar />
    <div class="body vh-1000 w-100">
      <Testimonial
        v-for="testimonial in testimonial"
        :key="testimonial.id"
        :testimonial="testimonial"/>
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import NavigationBar from "@/components/Reusables/Navigation.vue";
import Footer from "@/components/Reusables/Footer.vue";
import Testimonial from "@/views/TestimonialView.vue";

export default {
  name: "Testimonial",
  components: {
    NavigationBar,
    Footer,
    Testimonial,
  },
  computed: {
    testimonial() {
      return this.$store.state.testimonial;
    },
  },
  mounted() {
    this.$store.dispatch("getTestimonial");
  },
};
</script>

<!-- CSS -->
<style scoped>
.body {
  background-color: #202020;
  position: absolute;
  z-index: -100;
}


</style>
