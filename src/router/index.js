import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'
import TestimonialView from '../views/TestimonialView.vue'
import ContactView from '../views/ContactView.vue'
import Footer from '../components/Reusables/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: TestimonialView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer
  },
  // Fetching JSON data for Projects
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  // Fetching JSON data for Testimonials
  // {
  //   path: '/testimonial',
  //   name: 'testimonial',
  //   component: Testimonial
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
