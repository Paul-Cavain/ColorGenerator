const Square = ({color, colorHex}) => {
    return(
        <section
            className="w-4/5 h-60 border-2 border-black text-center flex justify-center place-items-center text-xl mb-5"
            style = {{backgroundColor : color}}
        >
            <p className="text-xl font-semibold"> {color ? color : "Empy Value"} </p>
            <p className="text-xl font-semibold">{colorHex ? colorHex : null}</p>
        </section>
    );
}

Square.defaultProp = {
    color : "Empty color value"
}

export default Square;