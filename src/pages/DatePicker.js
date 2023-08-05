import { useState } from "react";
import { Calendar } from "antd"
import dayjs from "dayjs";
import AddTask from "../components/AddTask";

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs())
    const [modalVisible, setModalVisible] = useState(false)

    const selectHandler = (value) => {
        setSelectedDate(value)
        setModalVisible(true)
        console.log(selectedDate.format("YYYY-MM-DD"));
    }

    return (
        <div>
            <div className="header">
                <div className="page-title">
                    Calendar
                </div>
            </div>
            <div className="content">
                <Calendar className="calendar-section" onSelect={selectHandler} />
                <AddTask showModal={modalVisible} closeModal={() => setModalVisible(false)} date={selectedDate} />
            </div>
        </div>
    )
}

export default DatePicker