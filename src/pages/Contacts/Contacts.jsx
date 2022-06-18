import {useState} from "react";
import {useDispatch} from "react-redux";

import Contact from "./components/Contact/Contact";
import ModalCreate from "../../components/ModalCreate/ModalCreate";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";
import ModalDelete from "../../components/ModalDelete/ModalDelete";

import {createUser, updateUser} from "../../store/crudSlice";

import "./Contacts.scss";

const Contacts = ({users}) => {

    const [searchField, setSearchField] = useState('');
    const [modalCreate, setModalCreate] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [addFormData, setAddFormData] = useState('');
    const [editFormData, setEditFormData] = useState('');
    const [deleteData, setDeleteData] = useState('');
    const [imageUrl, setImageUrl] = useState(null);

    const dispatch = useDispatch();

    const handleChange = event => {
        setSearchField(event.target.value);
    };

    const handleCancel = event => {
        if (modalCreate){
            setModalCreate(false);
        } else if (modalUpdate){
            setModalUpdate(false);
            setImageUrl("")
        } else if (modalDelete){
            setModalDelete(false);
        }
    };

    const handleAddFormChange = event => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = event => {
        event.preventDefault();
        const image = imageUrl?imageUrl:"";
        dispatch(createUser({
            id: Math.random()*100000000000,
            name: addFormData.name,
            phone: addFormData.phone,
            img: image,
        }));

        setAddFormData((prev) => ({
          ...prev,
            name: "",
            phone: "",
        }))

        setModalCreate(false);
        setImageUrl("");
    };

    const handleEditClick = (id) => {

        const user = users.filter((el)=> el.id===id )

        setEditFormData(user[0]);
        setImageUrl(user[0].img)
        setModalUpdate(true)
    };

    const handleEditFormChange = event => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id:editFormData.id,
            name:editFormData.name,
            phone:editFormData.phone,
            img:imageUrl,
        }))
        setModalUpdate(false)
        setImageUrl("")
    }

    const handleDeleteClick = (id) => {

        const user = users.filter((el)=> el.id===id )
        setDeleteData(user[0]);
        setModalDelete(true)
    }

    const results = !searchField
        ? users
        : users.filter(
            contact =>
                contact.name.includes(searchField) ||
                contact.phone.includes(searchField)
        );

    const blur = modalCreate||modalUpdate||modalDelete?"blur":"";

    return (
        <div className={`contacts `}>
            <div className={`contacts__title ${blur}`}>
                <h2>Contacts</h2>
            </div>
            <div className={`contacts__search ${blur}`}>
                <input
                    className={'contacts__search_form'}
                    type={'text'}
                    placeholder={'Search'}
                    value={searchField}
                    onChange={handleChange}
                />
            </div>
            <div className={`contacts__create ${blur}`}>
                <div className={"contacts__create_btn"} onClick={() => {
                    setModalCreate(true);
                }}>
                    +
                </div>
            </div>
            {modalCreate && (
                <ModalCreate
                    handleCancel={handleCancel}
                    handleAddFormSubmit={handleAddFormSubmit}
                    handleAddFormChange={handleAddFormChange}
                    setImageUrl={setImageUrl}
                    imageUrl={imageUrl}
                />
            )}
            {modalDelete && (
                <ModalDelete
                    handleCancel={handleCancel}
                    deleteData={deleteData}
                    setDeleteData={setDeleteData}
                    setModalDelete={setModalDelete}
                />
            )}
            {modalUpdate && (
                <ModalUpdate
                    handleCancel={handleCancel}
                    handleEditFormChange={handleEditFormChange}
                    handleEditFormSubmit={handleEditFormSubmit}
                    editFormData={editFormData}
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                />
            )}
            <div className={`contacts__items ${blur}`}>
                {results.length !== 0 ? (
                    <div className={''}>
                        {results.map(item => (
                            <Contact
                                key={Math.random() * 9999999999}
                                id={item.id}
                                name={item.name}
                                phone={item.phone}
                                img={item.img}
                                handleCancel={handleCancel}
                                handleEditClick={handleEditClick}
                                handleDeleteClick={handleDeleteClick}
                            />
                        ))}
                    </div>
                ) : (
                    <h3 className={`contacts__none ${blur}`}>
                        No one was found
                    </h3>
                )}
            </div>
        </div>
    )

}

export default Contacts;