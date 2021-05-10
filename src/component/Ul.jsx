export const Li = ({className, contentLi})=>{
    return <li  className={className}>{contentLi}</li>
}

const Ul = ({className, contentUl1, contentUl2, contentUl3, contentUl4})=>{
    return (
        <ul className={className} >
            {contentUl1}
            {contentUl2}
            {contentUl3}
            {contentUl4}
        </ul>
    )
}
export default Ul;