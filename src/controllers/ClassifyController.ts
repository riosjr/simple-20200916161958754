
import { Request, Response } from 'express'
import fs from 'fs'
import naturalLanguageUnderstanding from '../services/NLUService'
import { InternalServerError } from 'src/libs/Errors'

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

class ClassifyController {
  async index (req: Request | any, res: Response) {
    let data
    try {
      data = fs.readFileSync('./src/data/all.json', 'utf8')
    } catch (e) {
      throw new InternalServerError(e)
    }
    data = JSON.parse(data)
    console.log('LEU')

    const responseAll = {}

    const allFetchs = Object.keys(data).map(async (key, index) => {
      const text = data[key].text
      const analyzeParams = {
        text,
        features: {
          entities: {
            model: process.env.MODEL_ID,
            sentiment: true
          }
        }
      }

      await sleep(3000 * index)
      console.log(`Fetching ${key}...`)
      const serviceResponse = await naturalLanguageUnderstanding.analyze(analyzeParams)
      responseAll[key] = {
        text,
        response: serviceResponse.result
      }

      console.log(`Done : ${key}!`)
      return {
        text,
        response: serviceResponse.result
      }
    })

    const letsSee = await Promise.all(allFetchs)

    fs.writeFileSync('./src/data/all_result.json', JSON.stringify(responseAll))

    res.json({
      message: 'done'
    })
  }
}

export default new ClassifyController()
