import React from "react";
import IconButton from "../template/iconButton";

export default props => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(cadastro => (
            <tr key={cadastro._id}>
                <td className={cadastro.done ? 'markedAsDone' : ''}>{cadastro.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={cadastro}
                        onClick={() => props.handleMarkAsDone(cadastro)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!cadastro}
                        onClick={() => props.handleRemove(cadastro)}></IconButton>
                </td>
            </tr>
        ));
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nomes</th>
                    <th>Data/Hora</th>
                    <th className="tableActions">Excluir</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}