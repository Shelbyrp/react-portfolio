import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div>
            <footer className="content bg-dark">
                <div className="footer-copyright text-center text-white py-3">
                    <a href="https://www.linkedin.com/in/shelby-pignat-08795293/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="icon" /></a>
                    <a href="https://github.com/Shelbyrp/react-portfolio" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="Github" className="icon" /></a>
                    <a href="https://twitter.com/shelby_pignat" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/material-rounded/50/ffffff/twitter.png" alt="Twitter" className="icon" /></a>
                    <a href="https://stackoverflow.com/users/14975737/shelby-p" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/ffffff/stackoverflow.png" alt="Stack Overflow" className="icon" /></a>
                    <p>
                        &copy; Shelby Pignat</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;