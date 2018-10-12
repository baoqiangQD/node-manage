<template>
  <div>
    <section class="left-area">
      <h3>组件列表</h3>
      <ul>
        <li v-for="(v, k, index) in componentList" :key=index>
          <button @click="componentName=k">{{k}}</button>
        </li>
      </ul>
    </section>

    <section class="mid-area">
      <h3>预览</h3>
      <component :is="componentName" v-bind="propsData"></component>
    </section>

    <section class="right-area">
      <h3>配置</h3>
      <ul>
        <li v-for="(v, k, index) in componentList[componentName].props" :key="index">
          <label for="">{{k}}</label>
          <input type="text" v-model="propsData[k]" :key="componentName+k">
        </li>
      </ul>
    </section>
  </div>
</template>

<style scopd>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
button {
  color: white;
  background: red;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
}
.left-area {
  float: left;
  width: 20%;
}

.mid-area {
  float: left;
  width: 60%;
}

.right-area {
  float: left;
  width: 20%;
}
</style>

<script>
import componentConfig from 'componentConfig'
export default {
  data() {
    return {
      componentName: 'xButton',
      componentList: componentConfig,
      propsData: {}
    }
  },
  components: componentConfig,
  methods: {
    inputClick: function (event, k) {
      let a = this.$set(this.propsData, k, event.target.value)
    }
  }
}
</script>


