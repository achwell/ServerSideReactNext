const Footer = () => {
    const year = new Date().getFullYear()
    return(
        <footer className="bg-light py-5">
            <div className="container px-4 px-lg-5">
                <div className="small text-center text-muted">Copyright © {year} - The smelly cats</div>
            </div>
        </footer>
    )
}

export default Footer;