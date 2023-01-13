const EmptyTemplate = (props) => {
    return (
        <div className={`cardTemplate empty ${props.className}`}>
            {props.children}
        </div>
    )
}
export default EmptyTemplate