<template>
  <div class="wrapper">
    <side-bar title="Vor">
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/dashboard">
        <i class="fa fa-tachometer" aria-hidden="true"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/computers">
        <i class="fa fa-desktop" aria-hidden="true"></i>
        <p>Computers</p>
      </sidebar-link>
      <sidebar-link to="/admin/actions">
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        <p>Actions</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
