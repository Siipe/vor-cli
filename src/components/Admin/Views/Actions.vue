<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">List of Actions</h4>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover table-striped" :columns="columns" :data="actionsForTable"></l-table>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LTable from "src/components/UIComponents/Table.vue";
import Card from "src/components/UIComponents/Cards/Card.vue";
const tableColumns = ["Name", "Description"];

export default {
  components: {
    LTable,
    Card
  },
  data() {
    return {
      columns: tableColumns,
      actions: [
        {
          id: 1,
          name: "Action 1",
          description: "Action 1 description"
        },
        {
          id: 2,
          name: "Action 2",
          description: "Action 2 description"
        },
        {
          id: 3,
          name: "Action 3",
          description: "Action 3 description"
        }
      ]
    };
  },
  computed: {
    actionsForTable() {
      let newActions = [];

      this.actions.forEach(function(action) {
        newActions.push({
          name: action.name,
          description: action.description
        })
      });

      return newActions;
    }
  }
};
</script>

<style scoped>
</style>
