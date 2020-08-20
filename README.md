# vuex

# vuex学习使用

vuex到底是什么？
这个状态我们可以理解为在data中的属性，需要共享给其他组件使用的部分。也就是说，是我们需要共享的data，使用vuex进行统一集中式的管理。


# vuex核心 store对象，const store=new Vuex.Store({...});

1.state: 包含了store中存储的各个状态(相当于data)
    使用：$store.state.data值
2.getters: 类似于Vue中的计算属性，根据其他getter或state计算返回值
    getters是state的一个计算属性 使用：this.$store.getters.getters方法名

3.mutations：一组方法，是改变store中状态的执行者，只能是同步操作
    mutations方法里面里面的参数，第一个默认为state，接下来的为自定义参数。组件中this.$store.commit('mutationsReduceCount',n)调用

4.actions：一组方法，其中可以包含异步操作
    action类似于mutations，不同在于actions提交的是mutations，而不是直接变更状态。actions可以包含任意异步操作。 
    使用：dispatch推送一个action this.$store.dispatch('actionsAddcount',n)
5.mudules:将store模块化

vuex官方给了我们一个更简单的方式来使用vuex， 也就是 
{mapState, mapMutations, mapActions, mapGetters}
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

