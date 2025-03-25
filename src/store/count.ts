import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    // actions 里面防止的是一个个的方法 用于响应组件中的"动作"
    actions:{
        increment(value:any){
            this.sum += value
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            school:'sad12das',
            address:'xxxxxx'
        }
    }
})