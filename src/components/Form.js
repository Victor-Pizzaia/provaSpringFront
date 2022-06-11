import React from 'react';
import { toast } from 'react-toastify';
import "../App.css";
import InputWithLabel from "./InputWithLabel";
import { saveOrUpdate } from '../service/spring';

const initialState = {
    modelo: "",
    anoFabricacao: "",
    cilindrada: "",
    cor: "",
    montadora: ""
}

export function Form (props) {
    const [moto, setMoto] = React.useState(props.moto || initialState);

    const onChangeState = e => {
        const {name, value} = e.target;
        setMoto(prev => ({...prev, [name]: value}))
    }

    const handleSave = async () => {
        const response = await saveOrUpdate(moto);
        if (response.error) return toast.error(`Error: ${response.error}`);
        toast.success("Moto cadastrada com sucesso!");
        props.handleChangeScreen();
    }

    const handleCancel = () => {
        setMoto(initialState);
        toast.info("Os campos foram limpados!");
    }

    return (
        <>
            <h1 className="text-3xl text-gray-700 font-bold mb-4 mx-4">Cadastro de Motos</h1>
            <form className="formBorder">
                <InputWithLabel text="Modelo" name={"modelo"} value={moto.modelo} onChange={onChangeState} />
                <InputWithLabel text="Ano de Fabricação" name={"anoFabricacao"} value={moto.fabric} onChange={onChangeState} />
                <InputWithLabel text="Cilindrada" name={"cilindrada"} value={moto.cilindrada} onChange={onChangeState} />
                <InputWithLabel text="Cor" name={"cor"} value={moto.cor} onChange={onChangeState} />
                <InputWithLabel text="Montadora" name={"montadora"} value={moto.montadora} onChange={onChangeState} />
            </form>
            <div className="flex justify-end py-2 mt-2">
                <button onClick={handleSave} className="bg-blue-700 text-white font-bold p-2 border-none rounded mx-3 hover:bg-blue-600">Salvar</button>
                <button onClick={handleCancel} className="bg-gray-700 text-white font-bold p-1 border-none rounded hover:bg-gray-600">Cancelar</button>
            </div>
        </>
    );
}
