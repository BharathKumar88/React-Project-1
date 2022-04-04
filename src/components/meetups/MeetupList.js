import MeetupItem from "./MeetupItem";

function MeetupList(props) {
    return (
        <ul>
            {props.meetups.map((meetup) => {
               return <MeetupItem 
                    key={meetup.id}
                    id={meetup.id}
                    title={meetup.title}
                    image={meetup.image}
                    description={meetup.description}
                    address={meetup.address}
                />
            })}
        </ul>
    )
}

export default MeetupList;