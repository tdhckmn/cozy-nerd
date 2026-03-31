import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyA-STSabNy7tb3EYemQzE1QebxMFJle8W0',
  authDomain: 'cozy-nerd.firebaseapp.com',
  projectId: 'cozy-nerd',
  storageBucket: 'cozy-nerd.firebasestorage.app',
  messagingSenderId: '902780899350',
  appId: '1:902780899350:web:3e1c68851e400257872537',
  measurementId: 'G-P30Q6HYC1Z',
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
