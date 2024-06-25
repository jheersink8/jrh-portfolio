import Blurb from './Content/Blurb';
import Milestones from './Content/Milestones';
import Future from './Content/Future';

export default function About() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4 border'>
                    <Blurb />
                </div>
                {/* <div className='col-4'>
                    <Milestones />
                </div>
                <div className='col-4'>
                    <Future />
                </div> */}
            </div>
        </div>
    )
}