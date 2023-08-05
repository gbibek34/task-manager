import { Modal } from "antd";

const AddTask = ({ showModal, closeModal, date }) => {
    return (
        <div>
            <Modal title="Add Task" footer={null} open={showModal} onCancel={closeModal}>
                {/* Place your form here */}
                <div>{date.format("YYYY-MM-DD")}</div>
            </Modal>
        </div>
    )
}

export default AddTask