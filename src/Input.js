const Input = ({ color, setColor, setColorHex }) => {

    return(
        <main className="flex flex-col justify-between place-content-center w-full px-12 space-y-5">
            
            <form>
                <input 
                    type="text"
                    placeholder="Add Color Name"
                    className="px-2 w-full h-12 border-2 border-black rounded-sm"
                    value = {color}
                    onChange = {(e) => {
                        setColor(e.target.value)
                        setColorHex(e.target.value)
                    }}
                />
            </form>
            
        </main>
    )
}

export default Input;