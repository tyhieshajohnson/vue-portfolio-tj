<!-- HTML -->
<template>
  <!-- Navigation Bar -->
  <NavigationBar />
  <!-- Body -->
  <div class="body vh-1000 h-100">
    <div id="home-container">
      <!-- Home Heading -->
      <div class="home-information" id="home-information">
        <h1 style="font-family: 'Manrope', sans-serif" class="home-description">
          Hi, I am Tyhiesha Johnson <br />A Front-End Developer <br />based in
          Cape Town.
        </h1>
        <!-- Home Description -->
        <p style="font-family: 'Manrope', sans-serif" class="home-description">
          Hey there! I'm Ty, a passionate and curious front-end developer <br />
          on the journey of turning ideas into captivating web experiences. With
          a <br />
          foundation in HTML, CSS, and JavaScript, I'm excited about the dynamic
          <br />
          world of web development and the endless possibilities it offers. My
          <br />
          enthusiasm for crafting user-friendly interfaces drives me to stay
          up-to-date <br />
          with the latest technologies and best practices.
        </p>
      </div>
      <!-- Home Image -->
      <div id="home-image">
        <img
          src="https://i.ibb.co/2c2zBSc/1690957765595-bw.jpg"
          alt=""
          class="home-image"
        />
      </div>
    </div>
    <!-- Home Button -->
    <div id="home-button">
      <button type="button">
        <i class="fa-regular fa-envelope"></i>
        <p class="home-button">
          <a href="https://mail.google.com/mail/u/0/" style="text-decoration: none;">
            johnsontyhiesha@gmail.com  
          </a></p>
      </button>
    </div>
  </div>
  <!-- Footer -->
  <Footer />
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/Reusables/Navigation.vue";
import Footer from "@/components/Reusables/Footer.vue";

export default {
  name: "HomeView",
  components: {
    NavigationBar,
    Footer,
  },
};
</script>

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

/* Home Content */
/* Alignment */
#home-container {
  overflow: hidden;
}

#home-information {
  float: inline-start;
}

#home-image {
  float: inline-end;
}
/* Image Size and Border */
.home-image {
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin-right: 50px;
  margin-top: 50px;
}

.home-description {
  font-style: normal;
  font-weight: 100;
  margin-left: 50px;
  margin-top: 50px;
}

button {
  background-color: #9d9d9d;
  margin-left: 50px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: baseline;
}

#home-button {
  height: 64px;
  width: 400px;
}

.home-button p {
  font-size: 10px;
  color: #ffffff;
}

@media screen and (max-width: 750px) {
  .body {
    width: 100%;
    height: 100%;
  }

  #home-information {
    width: 100%; 
    height: auto;
    border-radius: 0;
    background-color: #3b3b3b;
    margin-top: 20px; 
    margin-left: 0; 
    padding: 20px; 
  }
  .home-image {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-top: 20px;
  }

  .home-description {
    margin-left: 20px;
    margin-top: 20px;
  }

  button {
    margin-left: 20px;
  }

  #home-button {
    width: 100%;
  }
}
</style>
