import React from 'react';
import { Link } from 'react-router-dom';

class UserBookings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { currentUser, fetchBookings } = this.props;
        fetchBookings(currentUser.id);
    }
    
    render() {
        // Return null before bookings have loaded
        if (!this.props.bookings) return null;

        let { bookings } = this.props;
        let bookingsLis, noBookingsmessage;
        // debugger;
        if (bookings[0] === undefined) {
            noBookingsmessage = 
                <div>
                    <div className="no-upcoming-plans-message">
                        You have no upcoming plans. Start exploring ideas for your next trip.
                    </div>
                    <Link to="/">
                        <button className="explore-treebnb-btn">
                            Explore Treebnb
                        </button>
                    </Link>
                    <img
                        className="upcoming-plans-drawing" 
                        src={window.upcomingPlansSvg}
                        alt="Tree drawing"/>
                </div>
        } else {
            bookingsLis = bookings.map((booking, idx) => {
                return <UserBookingsItem booking={booking} key={idx} />;
            });
            noBookingsmessage = <></>;
        }    
        
        return (
            <div className="user-bookings-container">
                <h1 className="user-bookings-header">
                    Upcoming plans
                </h1>
                {noBookingsmessage}
                <ul className="treehouses-ul">
                    {bookingsLis}
                </ul>
            </div>
        )
    }

}

export default UserBookings;