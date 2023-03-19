import { useState } from "react";

const FormEvent = (props) => {

    //This is my state with the initial values empty
    const [event, setEvent] = useState({ title: "", location: "", eventtime: "" })
    //This is my data
    //{title: 'Women', location: 'Overland'. eventtime: "2023-03-29T07:00:00.000Z"}

    const handleTitleChange = (e) => {
        e.preventDefault();
        let newTitle = e.target.value;
        setEvent((event) => ({ ...event, title: newTitle }));
        //console.log(event.title);

    }
    const handleLocationChange = (e) => {
        e.preventDefault();
        let newLocation = e.target.value;
        setEvent((event) => ({ ...event, location: newLocation }));
        //console.log(event.location);
    }
    const handleDateChange = (e) => {
        e.preventDefault();
        let newDate = e.target.value;
        setEvent((event) => ({ ...event, eventtime: newDate }));
        //console.log(event.eventtime);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEvent(event);
        props.postRequest(event);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
                type="text"
                id="add-event-title"
                placeholder="The Title of your Event"
                required
                value={event.title} //state
                onChange={handleTitleChange}
            />
            <label>Place</label>
            <input
                type="text"
                id="add-event-location"
                placeholder="The Location of your Event"
                required
                value={event.location} //state
                onChange={handleLocationChange}
            />
            <label>Date</label>
            <input
                type="date"
                id="add-event-date"
                value={event.eventtime} //state
                onChange={handleDateChange}
            />
            <button type="submit" >Add Event</button>
        </form>
    )

}

export default FormEvent;