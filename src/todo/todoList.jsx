import React from 'react'
import IconButton from '../template/iconButton'
import './custom.css'

export default props => {

    const list = props.data || []

    const renderRows = () => {
        return list.map(child => (
            <tr key={child._id}>
                <td className={child.done ? 'marked' : ''}>{child.description}</td>
                <td>
                    <IconButton type="success mr-4" icon="check" hide={child.done} onClick={() => props.handleDone(child)} />
                    <IconButton type="warning mr-4" icon="undo" hide={!child.done} onClick={() => props.handlePending(child)} />
                    <IconButton type="danger" icon="trash-o" onClick={() => props.handleRemove(child)} />
                </td>
            </tr>
        ))
    }

    if(list.length !== 0){
        return(
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }else{
        return(
            <h3 className="text-center">Não há tarefas...</h3>
        )
    }
}