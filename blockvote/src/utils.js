import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from './config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))


  window.walletConnection = new WalletConnection(near)


  window.accountId = window.walletConnection.getAccountId()

  window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
    viewMethods: ['getGreeting','didParticipate','getAllprompt','getVotes','getUrl','getCandidatePair'],
    changeMethods: ['addUrl','addToPromptArray','addCandidatePair','addVote','recordUser'],
  })
}

export function logout() {
  window.walletConnection.signOut()
  // reload page
  window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn(nearConfig.contractName)
}
