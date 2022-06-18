import {useState, useEffect} from "react";

import "./ModalUpdate.scss"

const ModalUpdate = ({editFormData, handleEditFormChange,handleCancel,handleEditFormSubmit,setImageUrl,imageUrl}) => {

    let img="";
    let name="";
    let phone="";

    try {
        img = editFormData.img;
        name = editFormData.name;
        phone = editFormData.phone;
    }
    catch (e){
        console.error(e)
    }

    const [selectedImage, setSelectedImage] = useState(img);

    useEffect(() => {
        if (selectedImage) {
            try {
                setImageUrl(URL.createObjectURL(selectedImage));
            }
            catch (e) {
                console.error(e)
            }
        }
    }, [selectedImage]);

    return (
        <div className={`modal_update ${imageUrl && selectedImage?"large":""}`}>
            <h3 className={"modal_update__title"}>
                Update contact
            </h3>

            <div className={`modal_update__body `}>
                <div className={""}>
                    {imageUrl && selectedImage && (
                        <div className={"modal_update__preview"}>
                            <div className={"modal_update__preview_title"}>Image Preview:</div>
                            <img className={"modal_update__preview_img"} src={imageUrl} alt={selectedImage.img} height="50" width="50" />
                        </div>
                    )}
                </div>
                <label htmlFor='event-name' className='col-form-label'>
                    Change image:
                </label>
                <input
                    name={"img"}
                    className={"modal_update__item"}
                    accept={"image/jpeg, image/png"}
                    type="file"
                    onChange={e => setSelectedImage(e.target.files[0])}
                />
                <div className={"modal_update__item"}>
                    <label htmlFor='event-name' className='col-form-label'>
                        Change user name and surname:
                    </label>
                    <input
                        className='modal_update__item'
                        data-testid="textbox"
                        type='text'
                        name='name'
                        value={name}
                        required='required'
                        placeholder='Name and surname'
                        onChange={handleEditFormChange}
                    />
                </div>
                <div className={"modal_update__item"}>
                    <label htmlFor='event-name' className='col-form-label'>
                        Change user phone:
                    </label>
                    <input
                        className='modal_update__item'
                        data-testid="phone"
                        type='text'
                        name='phone'
                        value={phone}
                        required='required'
                        placeholder='Name'
                        onChange={handleEditFormChange}
                    />
                </div>
            </div>
            <div className={"modal_update__footer"}>
                <button
                    type='submit'
                    className='modal_update__btn save'
                    onClick={handleEditFormSubmit}
                >
                    Save
                </button>
                <button
                    type='button'
                    className='modal_update__btn cancel '
                    onClick={handleCancel}
                    data-testid="cancel"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default ModalUpdate;