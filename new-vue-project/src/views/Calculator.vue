<template>
    <div>
        <h2>Clculator</h2>
    </div>
    <input type="text" v-model="num1" @keyup.enter="plusNumbers" />
    <span> + </span>
    <input type="text" v-model="num2" @keyup.enter="plusNumbers" />
    <span> = </span>
    <span>{{result}}</span>
</template>
<script>
export default {
  name: 'Clculator_',
  data () {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  methods: {
    plusNumbers () {
      this.result = parseInt(this.num1) + parseInt(this.num2)
    }
  }
}
</script>
