
export function Button(props) {
    return (
        <button onClick={props.onClick} className={`
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}