import { createStore } from 'vuex'
const jsonLink = "https://tyhieshajohnson.github.io/vue-index.json-portfolio/"


const fetchData = async (url, mutation, dataProperty, context) => {
  context.commit('setLoading', true);
  try {
    const response = await fetch(url);
    const data = await response.json();
    context.commit(mutation, data[dataProperty]);
  } catch (error) {
    context.commit('setError', true);
    alert(`Failed to fetch ${mutation}`);
  } finally {
    context.commit('setLoading', false);
  }
};

export default createStore({
  state: {
    projects: [],
    salaam: [],
    testimonial: [],
  },
  getters: {
  },
  mutations: {
    setProjects: (state,projects)=> {
      state.projects = projects;
    },
    setSalaam: (state,salaam)=> {
      state.salaam = salaam;
    },
    setTestimonial: (state,testimonial)=> {
      state.testimonial = testimonial;
    }
  },
  actions: {
    fetchData: async (context, { url, mutation, dataProperty }) => {
      await fetchData(url, mutation, dataProperty, context);
    },
    getProjects: async (context) => context.dispatch('fetchData', {
      url: jsonLink,
      mutation: "setProjects",
      dataProperty: "projects",
    }),
    getSalaam: async (context) => context.dispatch('fetchData', {
      url: jsonLink,
      mutation: "setSalaam",
      dataProperty: "salaam",
    }),
    getTestimonial: async (context) => context.dispatch('fetchData', {
      url: jsonLink,
      mutation: "setTestimonial",
      dataProperty: "testimonial",
    }),
  },
  modules: {
  }
})
