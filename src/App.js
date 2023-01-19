import { Provider } from 'react-redux'
import Counter from './pembahasan/Counter'
import store from './app/Store'


const App = () => {
  return (
    <div>
        <Provider store={store}> 
          <Counter/>
        </Provider>
    </div>
  )
}

export default App



// Redux 
// Redux adalah library untuk mengelola state di react JS
// Ada banyak sekali library untuk mengelola state di react. Tapi redux memiliki keunggulan sendiri dibanding yang lain
// Karena banyak developer yang pakai redux. Di materi state management ini kita akan menggunakan redux untuk mengelola state di react
