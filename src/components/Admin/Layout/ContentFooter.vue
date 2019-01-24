<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/admin'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; Siipe {{ date }}
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        date: new Date().getFullYear()
      }
    }
  }

</script>
<style>

</style>
