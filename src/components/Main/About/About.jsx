import Blurb from './Content/Blurb';
import Milestones from './Content/Milestones';
import timeline from './Content/timeline';
import Future from './Content/Future';
import { useState } from 'react';
import './Content/styles.css';

export default function About() {
    const [style, runStyle] = useState('blurb')

    const runBlurb = () => {
        runStyle((prevStyle) => (prevStyle === 'red' ? 'blue' : 'red'));
    };

    return (
        <div>
            <h2>About Me</h2>
            <div className='container'>
                <div className='row border border-danger'>
                    <div className='col-2 d-flex flex-column '>
                        <button onClick={runBlurb} >Who I am</button>
                        <button>My Milestones</button>
                        <button >Future Roadmap</button>
                    </div>
                    <div  className='col-10'>
                        {/* <Blurb className={style}/> */}
                        {/* <Milestones timeline={timeline} /> */}

                    </div>
                </div>
            </div>
        </div>
    )
};