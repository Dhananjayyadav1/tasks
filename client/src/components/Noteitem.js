import React, { useContext } from 'react'
import noteContext from "../context/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, doneNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                {note.done ?
                    <i onClick={() => { doneNote(note._id) }} className="fas fa-check-circle text-success my-3 mx-3">Done</i>
                    :
                    <i onClick={() => { doneNote(note._id) }} className="fas fa-check-circle text-secondary my-3 mx-3 ">Pending</i>
                }
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success") }}></i>
                        <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
