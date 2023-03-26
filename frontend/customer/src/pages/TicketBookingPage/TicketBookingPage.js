import {useState} from "react"
import ChooseRoute from "../../components/TicketBooking/ChooseRoute/ChooseRoute"
import ConfirmRoute from "../../components/TicketBooking/ConfirmRoute/ConfirmRoute"

const TicketBookingPage = () => {
    const [process, setProcess] = useState({
        stepOne: true,
        stepTwo: false,
        stepThree: false,
        stepFour: false
    })
    
    const setStep = (newState) => {
        setProcess(pre => ({
            ...pre,
            ...newState
        }))
    }

    return (<>
    {process.stepOne && (<ChooseRoute currentStep = "stepOne" onSetStep = {setStep}/>)}
    {process.stepTwo && (<ConfirmRoute currentStep = "stepTwo" onSetStep = {setStep}/>)}
    </>)
}

export default TicketBookingPage;