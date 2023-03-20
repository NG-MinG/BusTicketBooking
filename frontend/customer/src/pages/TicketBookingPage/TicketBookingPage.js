import {useState} from "react"
import ChooseRoute from "../../components/TicketBooking/ChooseRoute/ChooseRoute"

const TicketBookingPage = () => {
    const [process, setProcess] = useState({
        stepOne: true,
        stepTwo: false,
        stepThree: false,
        stepFour: false
    })
    return (<>
    {process.stepOne && (<ChooseRoute/>)}
    </>)
}

export default TicketBookingPage;