import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary rounted mt-0 flex"
                aria-label="Eleventh navbar example" >

                <div className="container flex justify-center gap-20">
                    <NavLink to="/" className=" text-black">Home</NavLink>
                    <NavLink to="/about" className="text-black">About</NavLink>
                    <NavLink to="/catalogue" className="text-black">Catalogue</NavLink>
                    <NavLink to="/promo" className="text-black">Promo</NavLink>
                    <NavLink to="/contact" className="text-black">Contact</NavLink>

                </div>
            </nav>
        </>

    )
}

export default Navbar;