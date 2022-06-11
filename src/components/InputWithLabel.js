export default function InputWithLabel(props) {
    return (
        <div className="flex flex-col p-2">
            <label className="text-lg font-bold text-gray-700">{props.text}: </label>
            <input name={props.name} value={props.value} onChange={props.onChange} className="rounded border-none focus:outline-none p-2 bg-green-100"/>
        </div>
    )
}
