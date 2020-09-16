import dotenv from 'dotenv'
import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1'
import { IamAuthenticator } from 'ibm-watson/auth'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2020-08-01',
  authenticator: new IamAuthenticator({
    apikey: process.env.NLU_API_KEY
  }),
  serviceUrl: process.env.NLU_URL

})

export const NLUModelId = process.env.MODEL_ID

export default naturalLanguageUnderstanding
