<template>
    <child-component-4 @send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponent4 from '../ChildComponent4'
export default {
  components: { ChildComponent4 },
  mounted () {
    this.$refs.child_component.callFromParent()
  }
}
</script>
