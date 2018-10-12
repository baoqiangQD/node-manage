<template>
  <input v-model="localvalue" @change="emitEvent" :disabled="disabled" class="weui_switch" type="checkbox">
</template>
<script>
  export default{
    props: {
      value: {
        default: ''
      },
      disabled: {
        default: false
      },
    },
    data: function () {
      return {
        localvalue: this.value
      }
    },
    watch: {
      value: function (v) {
        this.localvalue = v
      }
    },
    methods: {
      emitEvent: function () {
        this.$emit('input', this.localvalue)
      }
    }
  }
</script>
