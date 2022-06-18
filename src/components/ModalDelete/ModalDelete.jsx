
import {useDispatch} from "react-redux";
import {deleteUser} from "../../store/crudSlice";

import "./ModalDelete.scss"

const ModalDelete = ({handleCancel,deleteData,setDeleteData, setModalDelete}) => {

    const dispatch = useDispatch();

    const handleDeleteSubmit = () => {
        dispatch(deleteUser(deleteData.id));
        setDeleteData("");
        setModalDelete(false);
    }

    return (
        <div className={`modal_delete`}>
            <h3 className={"modal_delete__title"}>
                Delete {deleteData.name}
            </h3>

            <div className={`modal_delete__body `}>
                <div className={"modal_delete__item"}>
                    Do you want delete this user?
                </div>
            </div>
            <div className={"modal_delete__footer"}>
                <button
                    type='submit'
                    className='modal_delete__btn delete'
                    onClick={handleDeleteSubmit}
                >
                    Delete
                </button>
                <button
                    type='button'
                    className='modal_update__btn cancel '
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default ModalDelete;