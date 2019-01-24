<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6" v-for="computer of computers" :key="computer.id">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="fa fa-desktop" aria-hidden="true"></i>
            </div>
            <div slot="content">
              <p class="card-category">{{ computer.name }}</p>
              <h4 class="card-title">{{ statusLabel(computer.status) }}</h4>
            </div>
          </stats-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatsCard from "src/components/UIComponents/Cards/StatsCard.vue";

export default {
  components: {
    StatsCard
  },
  data() {
    return {
      computers: [
        {
          id: 1,
          name: "Computer 1",
          status: 1
        },
        {
          id: 2,
          name: "Computer 2",
          status: 1
        },
        {
          id: 3,
          name: "Computer 3",
          status: 2
        }
      ]
    };
  },
  methods: {
    statusLabel(status) {
      switch (status) {
        case 1:
          return "Online"
        case 2:
          return "Offline"
        default:
          throw new Error("Invalid computer status!")
      }
    }
  }
};
</script>

<style scoped>
</style>
