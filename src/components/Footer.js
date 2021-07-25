import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div>
            <footer className="content bg-dark">
                <div className="footer-copyright text-center text-white py-3">
                    <a href="https://github.com/Shelbyrp/react-portfolio"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="icon" /></a>
                    <a href="https://github.com/Shelbyrp/react-portfolio"><img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="Github" className="icon" /></a>
                    <a href="https://github.com/Shelbyrp/react-portfolio"><img src="https://img.icons8.com/material-rounded/50/ffffff/twitter.png" alt="Twitter" className="icon" /></a>
                    <a href="https://github.com/Shelbyrp/react-portfolio"><img src="https://img.icons8.com/ios-filled/50/ffffff/stackoverflow.png" alt="Stack Overflow" className="icon" /></a>
                    <p>
                        &copy; Shelby Pignat</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;