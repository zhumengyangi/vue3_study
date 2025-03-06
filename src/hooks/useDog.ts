import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default function () {
    // https://dog.ceo/api/breed/pembroke/images/random 

    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_3473.jpg',
        'https://images.dog.ceo/breeds/pembroke/n02113023_3474.jpg'
    ])

    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    onMounted(() => {
        getDog()
    })
    // 向外部提供东西
    return { dogList, getDog }
}