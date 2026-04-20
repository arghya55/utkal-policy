import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './Component/Home'
import Policy from './Policy/Policy'
import It from './department/it'
import Cssd from './department/cssd'
import Hr from './department/hr'
import Finance from './department/finance'
import Nursing from './department/nursing'
import Pharmacy from './department/pharmacy'
import Radiology from './department/radiology'
import Laboratory from './department/laboratory'
import Maintenance from './department/maintenance'
import ItPolicyPage from './Page/Itpolicypage'
import ItSopPage from './Page/itsoppage'
import AddPolicy from './Page/AddPolicy'
import Video from './Video/Video'

function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    const updateRoute = () => {
      let route = window.location.hash

      // Remove '#' and normalize the route
      route = route.replace('#', '').toLowerCase().replace(/\/$/, '') || '/'

      switch (route) {
        case '/policy':
          setPage('policy')
          break
        case '/department/it':
          setPage('it')
          break
        case '/department/cssd':
          setPage('cssd')
          break
        case '/department/hr':
          setPage('hr')
          break
        case '/department/finance':
          setPage('finance')
          break
        case '/department/nursing':
          setPage('nursing')
          break
        case '/department/pharmacy':
          setPage('pharmacy')
          break
        case '/department/radiology':
          setPage('radiology')
          break
        case '/department/laboratory':
          setPage('laboratory')
          break
        case '/department/maintenance':
          setPage('maintenance')
          break
        case '/page/itsoppage':
          setPage('itsoppage')
          break
        case '/page/itpolicypage':
          setPage('itpolicypage')
          break
        case '/page/addpolicy':
          setPage('addpolicy')
          break
        case '/video':
          setPage('video')
          break
        default:
          setPage('home')
      }
    }

    updateRoute()
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  return (
    <>
      {page === 'home' && <Home />}
      {page === 'policy' && <Policy />}
      {page === 'it' && <It />}
      {page === 'cssd' && <Cssd />}
      {page === 'hr' && <Hr />}
      {page === 'finance' && <Finance />}
      {page === 'nursing' && <Nursing />}
      {page === 'pharmacy' && <Pharmacy />}
      {page === 'radiology' && <Radiology />}
      {page === 'laboratory' && <Laboratory />}
      {page === 'maintenance' && <Maintenance />}
      {page === 'itsoppage' && <ItSopPage />}
      {page === 'itpolicypage' && <ItPolicyPage />}
      {page === 'addpolicy' && <AddPolicy />}
      {page === 'video' && <Video />}
    </>
  )
}

export default App