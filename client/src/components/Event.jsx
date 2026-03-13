import React, { useState, useEffect } from 'react'
import '../css/Event.css'

const Event = ({ id, title, date, time, image }) => {

    const [formattedTime, setFormattedTime] = useState('')
    const [remaining, setRemaining] = useState('')

    useEffect(() => {
        // Format time (e.g., 20:00:00 to 8:00 PM)
        if (time) {
            const [hours, minutes] = time.split(':');
            const dateObj = new Date();
            dateObj.setHours(hours);
            dateObj.setMinutes(minutes);
            setFormattedTime(dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }

        // Calculate time remaining
        if (date) {
            const calculateRemaining = () => {
                const dateString = String(date).split('T')[0];
                const eventDate = new Date(`${dateString}T${time || '00:00:00'}`);
                const now = new Date();
                const diffMs = eventDate - now;

                if (diffMs < 0) {
                    setRemaining("Event has passed");
                } else {
                    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    setRemaining(`${days} days, ${hours} hours remaining`);
                }
            };

            calculateRemaining();
            const interval = setInterval(calculateRemaining, 60000); // Update every minute
            return () => clearInterval(interval);
        }
    }, [date, time]);

    return (
        <article className='event-information'>
            <img src={image} alt={title} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {new Date(date).toLocaleDateString()} <br /> {formattedTime}</p>
                    <p id={`remaining-${id}`} className={remaining === "Event has passed" ? "negative-time-remaining" : ""}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default Event
