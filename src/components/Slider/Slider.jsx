import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './slider.module.css'

const Slider = () => {
    return (
        <div className={styles.slider_main}>
            <Heading text="Slider"/>
            <Description text="Sliders allow users to make selections from a range of values."/>
            <div className={styles.content_block}>
                <div className={styles.container}>
                    <p><input type="range" min="0" max="100" /></p>
                </div>
            </div>
        
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=14px&lh=154%25&si=false&es=2x&wm=false&code=%253Cp%253E%253Cinput%2520type%253D%2522range%2522%2520min%253D%25220%2522%2520max%253D%2522100%2522%252F%253E%253C%252Fp%253E"/>
        </div>
    )
}

export default Slider
