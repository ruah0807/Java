<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="num1" />
            <span> + </span>
            <input type="text" v-model="num2" />
            <span> = </span>
            <span>{{ result }}</span>
        </div>
        <br>
        <div>
            <input type="text" v-model="num3" />
            <span> x </span>
            <input type="text" v-model="num4" />
            <span> = </span>
            <span>{{ result1 }}</span>
        </div>
    </div>
</template>
<script>
import { plusCalculator, multiCalculator } from '@/common'

export default {
  name: 'calculator_',
  setup () {
    const { num1, num2, result } = plusCalculator()
    const { num3, num4, result1 } = multiCalculator()
    return {
      num1, num2, result, num3, num4, result1
    }
  }
}
</script>
