<!-- HTML -->
<template>
  <!-- Navigation Bar -->
  <NavigationBar />
  <!-- Body -->
  <div class="body vh-1000 w-100">
    <div class="contact-container" style="font-family: 'Manrope', sans-serif">
      <div class="contact-heading">
        <h1
          style="
            font-family: 'Manrope', sans-serif;
            display: flex;
            justify-content: center;
            padding-top: 50px;
            padding-left: 100px;
          "
        >
          Contact Me
        </h1>
        <p
          style="
            font-family: 'Manrope', sans-serif;
            display: flex;
            justify-content: center;
            padding-left: 100px;
          "
        >
          Let's Have Coffee
        </p>
      </div>
    </div>
    <!-- Icons -->
    <div class="icon-container row" style="padding-top: 20px">
      <!-- Location -->
      <div class="icon-1 col">
        <i class="fa-solid fa-map-pin" style="color: #ffdb58"></i>
        <p style="font-family: 'Manrope', sans-serif">
          71 Bietou Rd, <br />
          Cape Town, 7785
        </p>
      </div>
      <!-- Phone Number -->
      <div class="icon-2 col">
        <i class="fa-solid fa-mobile" style="color: #ffdb58"></i>
        <p style="font-family: 'Manrope', sans-serif">+27 76 077 5241</p>
      </div>
      <!-- Email -->
      <div class="icon-3 col">
        <i class="fa-solid fa-paper-plane" style="color: #ffdb58"></i>
        <p style="font-family: 'Manrope', sans-serif">
          johnsontyhiesha@gmail.com
        </p>
      </div>
    </div>
    <!-- Bootstrap Form -->
    <div id="form-container" class="form-container">
      <form
        class="needs-validation contactForm"
        id="contactForm"
        novalidate
        action="https://formspree.io/f/xnqkenro"
        method="POST"
      >
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label
              for="validationCustom01"
              style="font-family: 'Manrope', sans-serif"
              >First name</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              name="firstName"
              placeholder="First name"
              value="Mark"
              style="font-family: 'Manrope', sans-serif"
              required
            />
            <div
              class="valid-feedback"
              style="font-family: 'Manrope', sans-serif"
            >
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label
              for="validationCustom02"
              style="font-family: 'Manrope', sans-serif"
              >Last name</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              name="lastName"
              placeholder="Last name"
              value="Otto"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label
              for="validationCustom03"
              style="font-family: 'Manrope', sans-serif"
              >Phone Number</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              name="phoneNumber"
              placeholder="Phone Number"
              style="font-family: 'Manrope', sans-serif"
              required
            />
            <div
              class="invalid-feedback"
              style="font-family: 'Manrope', sans-serif"
            >
              Please provide a valid phone number.
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label
              for="validationCustom04"
              style="font-family: 'Manrope', sans-serif"
              >Comment</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom04"
              name="comment"
              placeholder="Comment"
              style="font-family: 'Manrope', sans-serif"
              required
            />
            <div
              class="invalid-feedback"
              style="font-family: 'Manrope', sans-serif"
            >
              Let Me Know?
            </div>
          </div>
        </div>
        <button
          class="btn btn-dark"
          type="submit"
          style="font-family: 'Manrope', sans-serif"
        >
          Submit form
        </button>
      </form>
    </div>
    <!-- End of Form -->
    <!-- Footer -->
    <Footer />
  </div>
</template>

<!-- JavaScript -->
<script>
// @ is an alias to /src
import NavigationBar from "@/components/Reusables/Navigation.vue";
import Footer from "@/components/Reusables/Footer.vue";

export default {
  name: "ContactView",
  components: {
    NavigationBar,
    Footer,
  },
};
</script>

<!-- CSS -->
<style scoped>
.body {
  background-color: #202020;
  position: absolute;
  z-index: -100;
  overflow: hidden;
}

.icon-container {
  display: flex;
  justify-content: center;
  padding-left: 200px;
}

#form-container {
  width: 650px;
  height: 500px;
  border-radius: 24px;
  margin-top: 100px;
  margin-left: 500px;
  margin-bottom: 100px;
  background-color: #3b3b3b;
}

form {
  padding-left: 200px;
  padding-top: 60px;
  z-index: -1000;
}
</style>
