import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Notes from './Notes';
const Note = () => {
    let [note,setNote] = useState({
        title : '',
        content : '',
    })
    let changeEvent = (e)=>{
     const {name,value}=e.target;
        setNote((preVal)=>{
            return{
                ...preVal,
                [name] :value,
            }
        })
    }
    let [show, setShow] = useState(false);
    let toggle = ()=>{
        setShow(true);
    }

    const [addNote,setAddNote] = useState([])
    let clickEvent = ()=>{
        setAddNote((oldItem)=>{
            return[...oldItem,note]
        })
        setNote({
            title : '',
            content : '',
        })

        setShow(false);
    }

    let delNote  = (id)=>{
        setAddNote((oldNote)=>{
            return[...oldNote].filter((el,index)=>{
                return id !== index;
            })
        })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-8 col-md-3">
                        <div className="card mt-3">
                            <div className="card-body">
                                <input
                                    type="text"
                                    placeholder={show?'Title':'Take a note...'}
                                    name='title'
                                    value = {note.title}
                                    className='form-control'
                                    onChange={changeEvent}
                                    onClick={toggle}
                                />
                                {show ? (<textarea
                                    name="content"
                                    value = {note.content}
                                    rows="4"
                                    placeholder='add a note '
                                    className='form-control'
                                    onChange={changeEvent}>
                                </textarea>) : ""}
                                
                                {show ? (<button className="btn btn-warning" onClick={clickEvent}><AddIcon/></button>) : ""}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {addNote.map((item,index)=>{
                        return(
                            <Notes
                                key = {index}
                                id = {index}
                                title={item.title}
                                content = {item.content}
                                onclick = {delNote}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Note
