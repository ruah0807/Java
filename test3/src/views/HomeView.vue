<template>
  <!-- eslint-disable-next-line
eslint-disable -->
  <div class="container border-1">
    <div class="row g-2">
      <div class="col">
        <router-link to="/jan">
          <figure class="figure">
              <img src="../assets/1월.jpg" class="figure-img img-fluid rounded" alt="...">
              <figcaption class="figure-caption text-end">{{a}}</figcaption>
          </figure>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container border-1">
    <div class="row g-2">
      <div class="col">
        <router-link to="/feb">
          <figure class="figure">
              <img src="../assets/2월.jpg" class="figure-img img-fluid rounded" alt="...">
              <figcaption class="figure-caption text-end">{{b}}</figcaption>
          </figure>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container border-1">
    <div class="row g-2">
      <div class="col">
        <router-link to="/mar">
          <figure class="figure">
              <img src="../assets/3월.jpg" class="figure-img img-fluid rounded" alt="...">
              <figcaption class="figure-caption text-end">{{c}}</figcaption>
          </figure>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container border-1">
    <div class="row g-2">
      <div class="col">
        <router-link to="/apr">
          <figure class="figure">
              <img src="../assets/4월.jpg" class="figure-img img-fluid rounded" alt="...">
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
  data () {
    return {
      a: January,
      b: February,
      c: March,
      d: April
    }
  }
}
</script>
