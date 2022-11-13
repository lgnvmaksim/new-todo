
type ButtonType={
    name:string
    callBack:()=>void
    stylerForButton?:string
}

export const UniversalButton = (props:ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return(
        <button className={props.stylerForButton}
            onClick={onClickHandler}>{props.name}</button>
    )
}