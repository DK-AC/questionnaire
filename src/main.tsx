import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import { App } from '@/App'
import { store } from '@/store/store'
import ReactDOM from 'react-dom/client'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
