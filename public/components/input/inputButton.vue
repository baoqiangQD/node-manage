<template>
  <input type="button" @click="btnClick" :value="value" :style="{'color': color,'background-color': backGroundColor, 'width': width + 'px', 'height': height + 'px'}">
</template>

<style scoped>
input[type=button]{
  border: none;
  border-radius: 4px;
}
</style>

<script>
export default {
  props: {
    backGroundColor: {
      type: String,
      default: '#10A0EB'
    },
    color: {
      type: String,
      default: '#fff'
    },
    width: {
      type: Number,
      default: 140
    },
    height: {
      type: Number,
      default: 44
    },
    value: {
      type: String,
      default: '按钮'
    }
  },
  methods: {
    btnClick: function () {
      console.log('inputButton emit event: click')
      this.$emit('click')
    }
  }
}
</script>
