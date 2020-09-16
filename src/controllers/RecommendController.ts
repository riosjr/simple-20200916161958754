
import { Request, Response } from 'express'
import { BadRequest } from '../libs/Errors'
import naturalLanguageUnderstanding from '../services/NLUService'
import speechToText from 'src/services/SpeechToTextService'

class RecommendController {
  async post (req: Request | any, res: Response) {
    if (!req.file && !req.body.text) {
      throw new BadRequest('Enviar texto ou áudio')
    }

    let text = req.body.text

    if (req.file) {
      console.log(req.file)
      const speechResp = await speechToText.recognize({
        audio: req.file.path
      })

      text = speechResp.result.results[0].alternatives[0].transcript
    }

    const analyzeParams = {
      text,
      features: {
        /* categories: {
          model: process.env.MODEL_ID
        }, */
        entities: {
          model: process.env.MODEL_ID,
          sentiment: true
        }
        /*  relations: {
          model: process.env.MODEL_ID
        } */
        /* sentiment: {
          model: process.env.MODEL_ID
        } */
      }
    }

    const serviceResponse = await naturalLanguageUnderstanding.analyze(analyzeParams)

    /* .then(analysisResults => {
        console.log(JSON.stringify(analysisResults, null, 2))
      })
      .catch(err => {
        console.log('error:', err)
      }) */

    res.json({
      /* car: req.body.car,
      audio: req.file,
      text: req.body.text,
      modelId: process.env.MODEL_ID, */
      response: serviceResponse.result
    })
  }
}

export default new RecommendController()
