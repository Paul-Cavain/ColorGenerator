const Footer = ({ length }) => {
   const today = new Date();
    return (
        <footer className="text-md bg-blue-600 text-white p-2 w-full h-auto fixed text-center bottom-0 left-0 right-0">
            <span>Copyright &copy; {today.getFullYear()}</span>
        </footer>
    );
}

export default Footer;
