import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    // actions 里面防止的是一个个的方法 用于响应组件中的"动作"
    actions: {
        increment(value: number) {
            this.sum += value
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            school: 'sad12das',
            address: 'xxxxxx'
        }
    },
    getters: {
        // bigSum(state) {
        //     return state.sum * 10
        // },
        bigSum:state => state.sum *10 ,
        upperSchoole():string{
            return this.school.toUpperCase()
        }
    }
})