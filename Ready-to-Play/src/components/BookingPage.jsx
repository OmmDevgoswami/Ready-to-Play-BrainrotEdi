

const BookingPage = ({venue}) => {
    if (!venue) {
        return <h2> Venue not found</h2>
    }

    return (
        <div style={{maxWidth: "800px", margin: "0 auto", padding: "20px"}}>
            {VenueName}
        </div>
    )
}