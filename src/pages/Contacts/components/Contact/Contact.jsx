import "./Contact.scss";

const Contact = (
    {
        id,
        name,
        img,
        phone,
        handleEditClick,
        handleDeleteClick
    }
) => {

    return (
        <div className={"contact"}>
            <div className={"contact__general"}>

                <div className={"contact__img"}>
                    {!!img && <img className={"contact__img"} src={img}/>}

                </div>
                <div className={"contact__info"}>
                    <div className={"contact__name"}>
                        {name}
                    </div>
                    <div className={"contact__phone"}>
                        {phone}
                    </div>
                </div>

            </div>
            <div className={"contact__buttons"}>

                <button
                    type='submit'
                    className='contact__button edit'
                    data-testId="edit"
                    onClick={() => {
                        handleEditClick(id)
                    }}
                >
                    Edit
                </button>
                <button
                    type='button'
                    className='contact__button delete '
                    data-testId="delete"
                    onClick={() => {
                        handleDeleteClick(id)
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    )

}

export default Contact;