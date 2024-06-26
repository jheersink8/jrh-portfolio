export default function Milestones(props) {
    return (
        <div className="container">
            <ul>
                {props.timeline.map(event => (
                    <li key={event.id}>
                        {event.date}
                        {event.description}
                    </li>
                ))}

            </ul>
        </div>
    )
};