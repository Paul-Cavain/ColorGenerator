const Header = ({title}) => {
    return (
        <header className="bg-blue-600 text-white text-2xl font-semibold fixed w-full h-auto p-2 top-0 left-0 right-0">
            {/* <span>Gloceries Lists</span> */}
            <span>{title}</span>
        </header>
    );
}

Header.defaultProps = {
    title: "Color Generator"
}

export default Header;