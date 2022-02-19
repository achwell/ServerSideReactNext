import {Navbar, Nav} from 'react-bootstrap';
import Link from 'next/link'
import {useSession, signout} from "next-auth/client";

const Navigation = () => {

    const [session, loading] = useSession()

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Link href="/">My awesome app</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                {!session && !loading && (
                    <Link href="/sign_in" passHref>
                        <Nav.Link>Sign in</Nav.Link>
                    </Link>
                )}
                {session && !loading && (
                    <>
                        <Nav.Link onClick={() => signout({callbackUrl:"/"})}>Sign out</Nav.Link>
                        <Link href="/dashboard" passHref>
                            <Nav.Link>Dashboard</Nav.Link>
                        </Link>
                        <Link href="/admin" passHref>
                            <Nav.Link>Admin</Nav.Link>
                        </Link>
                    </>
                )}
            </Nav>
        </Navbar>
    )
}

export default Navigation;