import React, { useEffect } from "react"
import { deleteById, getAllData } from "../service/spring";
import { IconTrash } from "./Icons";

export function Listagem() {
    const [motos, setMotos] = React.useState([]);

    const handleChangeDelete = (id) => {
        deleteById(id);
        window.location.reload();
    }
    const Th = (props) => <th className="text-left p-4">{props.children}</th>
    const Td = (props) => <td className="text-left p-4">{props.children}</td>
    const IconButton = (props) => 
        <button
            className={`
                flex justify-center items-center
                ${props.color} rounded-full p-2 m-1
                hover:bg-purple-50
            `}
            onClick={props.handleClick}
        >
            {props.children}
        </button>
    
    useEffect(() => {
        async function fetchData() {
            const response = await getAllData();
            setMotos(response.data);
        }
        fetchData();
    }, [])

    function renderizarAcoes(props) {
        console.log(props)
        return (
            <td className="flex justify-center">
                <IconButton color="text-red-500" handleClick={() => handleChangeDelete(props.renavam)}>
                    {IconTrash}
                </IconButton>
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-blue-500 to-blue-800
            `}>
                <tr>
                    <Th>Renavam</Th>
                    <Th>Modelo</Th>
                    <Th>Ano de Fabricação</Th>
                    <Th>Cilindrada</Th>
                    <Th>Montadora</Th>
                    <th className="p-4">Ações</th>
                </tr>
            </thead>
            <tbody>
                {motos.map((moto, i) => (
                    <tr key={moto?.renavam}
                    className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-100'}`}
                    >
                        <Td>{moto?.renavam}</Td>
                        <Td>{moto?.modelo}</Td>
                        <Td>{moto?.anoFabricacao}</Td>
                        <Td>{moto?.cilindrada}</Td>
                        <Td>{moto?.montadora}</Td>
                        {renderizarAcoes(moto)}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
