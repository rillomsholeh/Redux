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