import { logEvent as firebaseLogEvent } from 'firebase/analytics'
import { analytics } from './firebase.js'
import { isQaMode } from './qa.js'

export function logEvent(eventName, params) {
  if (isQaMode) {
    console.log(`[QA MODE] Suppressed analytics event: "${eventName}"`, params ?? {})
    return
  }
  firebaseLogEvent(analytics, eventName, params)
}
