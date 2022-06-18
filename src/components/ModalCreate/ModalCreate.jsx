import "./ModalCreate.scss";
import {useEffect, useState} from "react";

const ModalCreate = ({handleCancel,handleAddFormSubmit,handleAddFormChange, setImageUrl, imageUrl}) => {

    const [selectedImage, setSelectedImage] = useState("");

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

  return(
      <div className={`modal_create ${imageUrl && selectedImage?"large":""}`} >
          <h3 className={"modal_create__title"}>
              Create contact
          </h3>
          <div className='modal_create__body'>
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
              <div className='modal_create__item'>
                  <label htmlFor='event-name' className='col-form-label'>
                      User name and surname:
                  </label>
                  <input
                      className=''
                      data-testId='name'
                      type='text'
                      name='name'
                      required='required'
                      placeholder='Name and surname'
                      onChange={handleAddFormChange}
                  />
              </div>
              <div className='modal_create__item'>
                  <label htmlFor='event-name' className='col-form-label'>
                      User phone:
                  </label>
                  <input
                      className=''
                      type='phone'
                      name='phone'
                      required='required'
                      placeholder='Phone'
                      onChange={handleAddFormChange}
                  />
              </div>
          </div>
          <div className='modal_create__footer'>
              <button
                  type='submit'
                  data-testId='submit'
                  className='modal_create__btn submit'
                  onClick={handleAddFormSubmit}
              >
                  Submit
              </button>
              <button
                  type='button'
                  className='modal_create__btn cancel'
                  onClick={handleCancel}
              >
                  Cancel
              </button>
          </div>
      </div>
  )
}
export default ModalCreate;