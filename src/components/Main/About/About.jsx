import Blurb from './Content/Blurb';
import Milestones from './Content/Milestones';
import timeline from './Content/timeline';
import Future from './Content/Future';
import { useState } from 'react';
import './Content/styles.css';

export default function About() {
    const [state, setState] = useState('Blurb');

    return (
        <div>
            <h2>About Me</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 d-flex flex-column '>
                        <button onClick={() => setState('Blurb')}>Who I am</button>
                        <button onClick={() => setState('Milestones')}>My Milestones</button>
                        <button onClick={() => setState('Future')}>Future Roadmap</button>
                    </div>
                    <div className='col-10'>
                        {state === 'Blurb' && <Blurb />}
                        {state === 'Milestones' && <Milestones timeline={timeline} />}
                        {state === 'Future' && <Future />}
                    </div>
                </div>
            </div>
        </div>
    )
};