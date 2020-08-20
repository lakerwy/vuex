<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{$store.state.count}}</h3>
    <input type="button" value="增加" @click="handleAddClick(10)" />
    <input type="button" value="减少" @click="$store.commit('reduceCount',10)" />
    <div>
      <h1>异步操作</h1>
      <input type="button" value="异步增加" @click="handleActionsAdd(5)" />
      <input type="button" value="异步减少" @click="handleActionsReduce(5)" />
    </div>
    <h2>{{count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    //commit 同步操作，写法：this.$store.commit('mutations方法名',值);
    handleAddClick(n) {
      this.$store.commit('addCount',n);
    },
    // handleReduceClick(n) {
    //   // this.$store.commit('reduceCount',n)
    // }

    //dispatch: 含有异步操作，例如向后台提交数据 
    //写法：this.$store.dispatch('actions方法名',值)
    handleActionsAdd(n) {
      this.$store.dispatch('actionsAddCount',n)
    },
    handleActionsReduce(n) {
      this.$store.dispatch('actionsReduceCount',n)
    }
  },
  computed: {
    couunt(){
      return this.$store.getters.getterCount(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
