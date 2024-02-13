<template>
  <!-- eslint-disable-next-line
eslint-disable -->
  <div class="container border-1">
    <div class="row">
      <div class="col">
        <router-link to="/">
          <figure class="figure">
              <img src="../assets/4월_서브.jpg" class="figure-img img-fluid rounded" alt="...">
              <figcaption class="figure-caption text-end">{{d}}</figcaption>
          </figure>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
  export default {
    data(){
      return {
        d: April
      }
    }
  }
</script>

