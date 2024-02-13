import { reactive, computed, toRefs } from 'vue'
const plusCalculator = () => {
  const state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  })
  return toRefs(state)
}
const multiCalculator = () => {
  const state1 = reactive({
    num3: 0,
    num4: 0,
    result1: computed(() => parseInt(state1.num3) * parseInt(state1.num4))
  })
  return toRefs(state1)
}
export {
  plusCalculator,
  multiCalculator
}
