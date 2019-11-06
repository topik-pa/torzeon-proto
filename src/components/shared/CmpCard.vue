<template>
  <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal" v-html="tour.name"></h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CmpCard',
  props: {
    tour: Object
  }
}
</script>

<style scoped>

</style>
