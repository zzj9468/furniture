<template>
  <div class="home">
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue';
import Footer from "@/components/footer.vue"
export default {
  name: 'home',
  components: {
    Header,
    Footer
   }
}
</script>
