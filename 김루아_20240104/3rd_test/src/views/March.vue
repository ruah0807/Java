<template>
  <div class="container border-1 mt-5">
    <div class="row">
      <div class="col">
        <router-link to="/">
          <figure class="figure">
              <img src="../assets/3월_서브.jpg" class="figure-img img-fluid rounded" alt="...">
              <figcaption class="figure-caption text-end">{{c}}</figcaption>
          </figure>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        c: 'March'
      }
    }
  }
</script>
