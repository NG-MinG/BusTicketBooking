import {useState} from "react"
import ChooseRoute from "../../components/TicketBooking/ChooseRoute/ChooseRoute"
import ConfirmRoute from "../../components/TicketBooking/ConfirmRoute/ConfirmRoute"
import GuestInfo from "../../components/TicketBooking/GuestInfo/GuestInfo"
import Payment from "../../components/TicketBooking/Payment/Payment"

const TicketBookingPage = () => {
    const [process, setProcess] = useState({
        stepOne: true,
        stepTwo: false,
        stepThree: false,
        stepFour: false
    })
    
    const setStep = (newState) => {
        console.log("new State: ", newState)
        setProcess(pre => ({
            ...pre,
            ...newState
        }))
        // setProcess(pre => {
        //     console.log("currentState: ", pre);
        //     console.log("new State: ", newState);
        //     return {
        //         ...pre,
        //         ...newState,
        //     }
        // })
    }

    return (<>
    {process.stepOne && (<ChooseRoute currentStep = "stepOne" onSetStep = {setStep}/>)}
    {process.stepTwo && (<ConfirmRoute currentStep = "stepTwo" onSetStep = {setStep}/>)}
    {process.stepThree && (<GuestInfo currentStep = "stepThree" onSetStep ={setStep}/>)}
    {process.stepFour && (<Payment currentStep = "stepFour" onSetStep ={setStep}/>)}
    </>)
}

export default TicketBookingPage;