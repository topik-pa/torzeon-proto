<template>
  <div>
    <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-5">Find a tour</h2>
      <form class="form-inline">
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter city or location">
        </div>
        <button type="submit" class="btn btn-primary disabled" @click="submit">Find tour</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CmpFindBy',
  components: {
  },
  methods: {
    submit(e) {
      e.preventDefault();      
    }
  }
}
</script>

<style scoped>
.form-inline {
  justify-content: center;
}
</style>
