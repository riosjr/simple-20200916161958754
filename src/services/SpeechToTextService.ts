import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1'
import { IamAuthenticator } from 'ibm-watson/auth'

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.STT_API_KEY
  }),
  serviceUrl: process.env.STT_URL
})

export default speechToText
