<!-- HTML -->
<template>
    <!-- Bootstrap Navigation Bar -->
    <!-- Main Navigation Container -->
    <div class="nav-container" style="background-color: #323232;">
        <nav class="navbar">
            <div class="container-fluid">
                <router-link to="/" class="nav-link">
                    <!-- Google Drive Embedded Link -->
                    <img src="https://drive.google.com/uc?export=download&id=1ZsMucyOQz0-_8y6oYv16u-kNqampKukA" alt="Logo" width="30" height="20" class="d-inline-block align-text-top" id="logo">
                    <a style="font-family: 'Manrope', sans-serif;">Tyhiesha</a>
                </router-link>
                
                <!-- Navigation Links: Home, About, Personal Projects, Resume, Testimonials and Contact -->
                <div class="nav-links">
                    <router-link to="/" class="nav-link" style="font-family: 'Manrope', sans-serif;">Home </router-link> 
                    <router-link to="/about" class="nav-link" style="font-family: 'Manrope', sans-serif;">About</router-link> 
                    <router-link to="/projects" class="nav-link" style="font-family: 'Manrope', sans-serif;">Projects</router-link> 
                    <router-link to="/resume" class="nav-link" style="font-family: 'Manrope', sans-serif;">Resume</router-link> 
                    <router-link to="/testimonail" class="nav-link" style="font-family: 'Manrope', sans-serif;">Testimonial</router-link> 
                    <router-link to="/contact" class="nav-link" style="font-family: 'Manrope', sans-serif;">Contact</router-link> 
                </div>
            </div>
        </nav>
    </div>
</template>

<!-- JavaScript -->
<script>
export default {
    name: "NavigationBar",
    props: {
        msg: "NavigationBar"
    }
}
</script>

<!-- CSS -->
<style scoped>
/* Navigation Bar */
#logo {
    margin-left: 30px;
}

.container-fluid {
    margin-top: 20px;
}
.navbar-brand {
    color: #DEDEDE;
}
.nav-link {
    color: #DEDEDE;
    font-size: 15px;
    font-weight:500;
    justify-content: space-between;
    /* display: flex;
    justify-content: center; */
 }
 .nav-container {
    height: 80px;
 }
 .nav-links {
    display: flex;
    width: 500px;
    justify-content: space-between;
 }
</style>