import './App.css'
import { Routes, Route } from "react-router-dom"
import { SplashScreen } from './modules/home/SplashScreen'
import { ForgotPassword } from './modules/authentication/forgot-password'
import { ForgotPasswordOTP } from './modules/authentication/forgot-password-otp'
import { ChangePassword } from './modules/authentication/change-password'
import { SignupSuccess } from './modules/authentication/components/signup-success'
import { PasswordResetSuccess } from './modules/authentication/components/password-reset-success'
import { Authentication } from './modules/authentication/authentication'
import { HomeLayout } from './component/layout/HomeLayout'
import { AuthLayout } from './component/layout/AuthLayout'
import { GameType } from './modules/home/GameType'
import { Profile } from './modules/dashboard/profile/profile'
import { ProfileLayout } from './component/layout/ProfileLayout'
import { Settings } from './modules/dashboard/profile/settings'
import { GameHistory } from './modules/dashboard/profile/game-history'
import { TransactionHistory } from './modules/dashboard/profile/transactions/transaction-history'
import { Desposit } from './modules/dashboard/profile/deposit/desposit'
import { Withdrawal } from './modules/dashboard/profile/withdrawal/withdrawal'
import { PlayHome } from './modules/home/PlayHome'
import { SetupGame } from './modules/home/SetupGame'
import { GameCode } from './modules/home/GameCode'
import { AddPeople } from './modules/home/AddPeople'
import { Community } from './modules/dashboard/community'
import { StartGame } from './modules/dashboard/game-engine/startGame'


function App() {

  return (
    <>
      <Routes  >
        <Route element={<HomeLayout />}>
          <Route index element={<SplashScreen />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />
          <Route path='/auth/forgot-password-otp' element={<ForgotPasswordOTP />} />
          <Route path='/auth/change-password' element={<ChangePassword />} />
          <Route path='/auth/password-success' element={<PasswordResetSuccess />} />
          <Route path='/auth/signup-success' element={<SignupSuccess />} />
        </Route>
        <Route  element={<AuthLayout />}>
          <Route path='/dashboard' element={<PlayHome />} />
          <Route path='/dashboard/create-game' element={<GameType />} />
          <Route path='/dashboard/game-3  ' element={<SetupGame />} />
          <Route path='/dashboard/game-code' element={<GameCode />} />
          <Route path='/dashboard/add-people' element={<AddPeople />} />
          <Route path='/dashboard/community' element={<Community />} />
          <Route path='/dashboard/start-game' element={<StartGame />} />
          {/* <Route path='/dashboard/profile' element={<Profile />} /> */}
        </Route>
        <Route  element={<ProfileLayout />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/bio-info' element={<Profile />} />
          <Route path='/user/game-history' element={<GameHistory />} />
          <Route path='/user/transactions' element={<TransactionHistory />} />
          <Route path='/user/deposit' element={<Desposit />} />
          <Route path='/user/withdrawal' element={<Withdrawal />} />
          <Route path='/user/settings' element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
