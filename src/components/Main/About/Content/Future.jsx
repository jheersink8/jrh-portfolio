export default function Future() {
    return (
        <div > 
            <h3>What's Next for Me:</h3>
            <p className="common px-3">These are some of the things I want to explorer next.</p>
            <div className="row">
                <div className="col-4">
                    <h4 >Programming Languages</h4>
                    <ul>
                        <li>C#</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>Libraries & Frameworks</h4>
                    <ul>
                        <li>D3</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>Tools & Platforms</h4>
                    <ul>
                        <li>AWS</li>
                        <li>GraphQL Playground</li>
                        <li>Docker</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};