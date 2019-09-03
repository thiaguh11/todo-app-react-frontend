import React from 'react'

import IconButton from '../template/iconButton'

const todoForm = props => {

    const handleKey = (e) => {
        if(e.key === "Enter"){
            e.shiftKey ? props.handleSearch() : props.handleClickAdd()
        } else if(e.key === "Escape"){
            props.handleClear()
        }
    }

    return(
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Adicione uma tarefa" value={props.description} onChange={props.handleChangeText} onKeyUp={handleKey} />
            <div className="input-group-append">
                <IconButton type="outline-secondary" icon="plus" onClick={props.handleClickAdd} />
                <IconButton type="outline-secondary" icon="search" onClick={props.handleSearch} />
                <IconButton type="outline-secondary" icon="times" onClick={props.handleClear} />
            </div>
        </div>
    )
}

export default todoForm