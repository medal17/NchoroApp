import { Route, Routes } from 'react-router-dom'
import { Authentication } from './authentication'
import { ForgotPassword } from './forgot-password'

export const AuthenticationRoutes = () => {
 return (
    <Route path='/auth'>
        <Route index element={<Authentication/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Route>
  )
}
