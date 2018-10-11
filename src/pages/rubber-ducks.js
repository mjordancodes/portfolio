import React from 'react'

import styles from './rubber-ducks.module.scss'
import Layout from '../components/layout'

const DucksPage = () => (
  <Layout>
    <div className={styles.ducks}>
      <div className={styles.text}>
      <h2>What is Rubber Duck Debugging?</h2>
      <ol>
        <li>Aquire a rubber duck. If you don't have a rubber duck and you landed here because I handed you my card, fold my card in half and stand it up.</li>
        <li>Become friends with your duck. It should have a name and possibly a life story.</li>
        <li>Ask your duck if he/she has time to review some code with you. If the duck is available, begin to review your code with said duck.</li>
        <li>Walk over the code, line-by-line, with the duck. Explain what each line does. (Be careful to explain what the line <em>actually</em> does, not what is it <em>supposed</em> to do.)</li>
        <li>Eventually, you will come across a line of code that isn't doing what you intended it to do. Now you know where the problem is and you can fix it.</li>
        <li>Say "Thank You!" to your duck.</li>
      </ol>
      <footer>
        <p>This information is based on my own experience with rubber ducks and things I learnt from cool sites like <a href="https://rubberduckdebugging.com/" target="_blank">RubberDuckDebugging.com</a></p>
      </footer>
      <p>So now that you are on my site, you might as well checkout the rest of the things I have. It isn't all about ducks: <a href="/" className={styles.mylink}>mJordan's Site</a></p>
      </div>
    </div>
    
  </Layout>
)

export default DucksPage
