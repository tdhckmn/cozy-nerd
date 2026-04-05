const QA_COOKIE = 'cn_qa'

function getCookie(name) {
  return document.cookie.split('; ').find((r) => r.startsWith(name + '='))?.split('=')[1]
}

function setQaCookie() {
  const oneYear = 60 * 60 * 24 * 365
  document.cookie = `${QA_COOKIE}=true; path=/; max-age=${oneYear}`
}

function init() {
  const params = new URLSearchParams(window.location.search)
  const fromParam = params.get('qa') === 'true'
  const fromCookie = getCookie(QA_COOKIE) === 'true'

  if (fromParam && !fromCookie) {
    setQaCookie()
    console.log('[QA MODE] qa=true detected in URL — QA cookie set for this browser.')
  }

  const isQa = fromParam || fromCookie

  if (isQa) {
    console.log('[QA MODE] QA mode is enabled. Analytics events will be logged here instead of sent.')
  }

  return isQa
}

export const isQaMode = init()
