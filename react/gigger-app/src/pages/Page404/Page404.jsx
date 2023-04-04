import React from 'react'
import { giveMeARandomPhrase } from '../../utils/randomPhraseGenerator'

const Page404 = () => {

  const phraseToDraw = giveMeARandomPhrase()

  return (
    <div>
        <h1>404</h1>
        <img src="https://media.tenor.com/fmC_LhZBAWoAAAAC/rajoy-hi.gif" alt="Rajoy saludando" />
        <h3>{phraseToDraw.phrase}</h3>
        <h4>{phraseToDraw.author}</h4>
    </div>
  )
}

export default Page404