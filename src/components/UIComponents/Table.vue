<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <th v-for="(column, column_idx) in columns" :key="`column-${column_idx}`">{{column}}</th>
      </slot>
    </thead>
    <tbody>
    <tr v-for="(item, item_idx) in data" :key="`item-${item_idx}`">
      <slot :row="item">
        <td v-for="(column, column_idx) in columns" :key="`column-${column_idx}`" v-if="hasValue(item, column)">{{itemValue(item, column)}}</td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'l-table',
    props: {
      columns: Array,
      data: Array
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      }
    }
  }
</script>
<style>
</style>
