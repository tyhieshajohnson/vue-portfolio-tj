<template>
  <div>
    <!-- Navigation Bar -->
    <NavigationBar />
    <!-- Body -->
    <div class="body vh-1000 w-100">
      <div class="about-information" id="about-information">
        <!-- About Images -->
        <!-- Social Media Mock-up -->
        <div
          class="container text-center"
          style="
            border: solid lightgray 3px;
            border-radius: 10px;
            padding: 10px;
          "
        >
          <!-- About Information -->
          <!-- Content -->
          <div class="about-intro row" style="padding-left: 100px">
            <div class="profile col">
              <img
                src="https://drive.google.com/uc?export=download&id=1_P-KSRyjO_5aXnHeuRAQLkkp4qo4pc0F"
                alt=""
                style="
                  border-radius: 50%;
                  border: solid lightgray 2px;
                  width: 300px;
                  height: 300px;
                "
              />
            </div>
            <div class="aboutInfo col" style="padding-left: 100px">
              <h1
                style="
                  font-family: 'Manrope', sans-serif;
                  display: flex;
                  justify-content: center;
                  padding-top: 50px;
                "
              >
                Who Am I?
              </h1>
              <p style="font-family: 'Manrope', sans-serif">
                Include a brief "About Me" section to introduce yourself. <br />
                Share your passion for front-end development, <br />
                your background, and any relevant experiences.
              </p>
              <!-- Resume Button -->
              <div id="resume-button" style="padding-left: 100px">
                <button>
                  <i class="fa-solid fa-file-arrow-down"></i>
                  <p
                    class="resume-button"
                    style="
                      font-family: 'Manrope', sans-serif;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    DOWNLOAD RESUME
                  </p>
                </button>
              </div>
            </div>
          </div>
          <!-- Story -->
          <div
            class="story-container row row-cols-4"
            style="display: flex; justify-content: center"
          >
            <div>
              <img
                class="story-container"
                src="https://drive.google.com/uc?export=download&id=1_P-KSRyjO_5aXnHeuRAQLkkp4qo4pc0F"
                alt=""
                style="
                  border-radius: 50%;
                  border: solid lightgray 2px;
                  width: 100px;
                  height: 100px;
                "
              />
              <p>ty /</p>
            </div>
            <div>
              <img
                class="story-container"
                src="https://drive.google.com/uc?export=download&id=1_P-KSRyjO_5aXnHeuRAQLkkp4qo4pc0F"
                alt=""
                style="
                  border-radius: 50%;
                  border: solid lightgray 2px;
                  width: 100px;
                  height: 100px;
                "
              />
              <p>ty /</p>
            </div>
            <div>
              <img
                class="story-container"
                src="https://drive.google.com/uc?export=download&id=1_P-KSRyjO_5aXnHeuRAQLkkp4qo4pc0F"
                alt=""
                style="
                  border-radius: 50%;
                  border: solid lightgray 2px;
                  width: 100px;
                  height: 100px;
                "
              />
              <p>ty /</p>
            </div>
            <div>
              <img
                class="story-container"
                src="https://drive.google.com/uc?export=download&id=1_P-KSRyjO_5aXnHeuRAQLkkp4qo4pc0F"
                alt=""
                style="
                  border-radius: 50%;
                  border: solid lightgray 2px;
                  width: 100px;
                  height: 100px;
                "
              />
              <p>ty /</p>
            </div>
          </div>
          <!-- Image Grid -->
          <div class="row row-cols-3">
            <!-- Image 1 -->
            <div class="img-1 col">
              <img
                src="https://drive.google.com/uc?export=download&id=1lz7cpUC77D1ngvGpkyV8EdwKudcDZnTm"
                alt=""
                width="420px"
                height="400px"
              />
              <div class="img-1-info">
                <p class="text">Info</p>
              </div>
            </div>
            <!-- Image 2 -->
            <div class="img-2 col">
              <img
                src="https://drive.google.com/uc?export=download&id=1RrGFiG1ZMhHzjtd5GeP7tMgGSdyE0nFu"
                alt=""
                width="420px"
                height="400px"
              />
              <div class="img-1-info">
                <p class="text">Info</p>
              </div>
            </div>
            <!-- Image 3 -->
            <div class="img-3 col">
              <img
                src="https://drive.google.com/uc?export=download&id=1RDHZtMLcOLo7TY56VXP_m_YcLXt7F2Dp"
                alt=""
                width="420px"
                height="400px"
              />
              <div class="img-1-info">
                <p class="text">Info</p>
              </div>
            </div>
            <!-- Image 4 -->
            <div class="img-4 col">
              <img
                src="https://drive.google.com/uc?export=download&id=12_vVee2ws1KfvXsUi1qNKK3sdRta3x7w"
                alt=""
                width="420px"
                height="400px"
              />
              <div class="img-1-info">
                <p class="text">Info</p>
              </div>
            </div>
            <!-- Image 5 -->
            <div class="img-5 col">
              <img
                src="https://drive.google.com/uc?export=download&id=18Ti26jElzNmHjm0lD_6qW_0_2r9l2tcU"
                alt=""
                width="420px"
                height="400px"
              />
              <div class="img-1-info">
                <p class="text">Info</p>
              </div>
            </div>
            <!-- Image 6 -->
            <div class="img-6 col">
              <img
                src="https://drive.google.com/uc?export=download&id=1Wm0Ny9F6qjGecaRDdIjf_8coIXmGuFcM"
                alt=""
                width="420px"
                height="400px"
              />
              <div class="img-1-info">
                <p class="text">Info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import NavigationBar from "@/components/Reusables/Navigation.vue";
import Footer from "@/components/Reusables/Footer.vue";

export default {
  name: "AboutView",
  components: {
    NavigationBar,
    Footer,
  },
};
</script>

<!-- CSS -->
<style scoped>
/* Body */
.body {
  background-color: #202020;
  position: absolute;
  z-index: -100;
}

.nav-links {
  display: flex;
  flex-flow: row nowrap;
  margin-right: 30px;
}

/* About Information Div */
#about-information {
  width: 1307px;
  height: 1500px;
  border-radius: 24px;
  background-color: #3b3b3b;
  margin-top: 100px;
  margin-left: 100px;
}

.about-intro {
  display: flex;
  justify-content: center;
}

/* Resume Button */
button {
  background-color: #181818;
  margin-left: 50px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: baseline;
}

#resume-button {
  height: 64px;
  width: 400px;
}

.resume-button p {
  font-size: 10px;
  color: #ffffff;
}

/* Story */
/* Image 1 */
.img-1:hover {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
.img-1-info {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  filter: blur(0);
}

.img-1-info:hover {
  opacity: 1;
}

.text {
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
/* Image 2 */
.img-2:hover {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

/* Image 3 */
.img-3:hover {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

/* Image 4 */
.img-4:hover {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

/* Image 5 */
.img-5:hover {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

/* Image 6 */
.img-6:hover {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
</style>
