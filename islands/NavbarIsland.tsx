import { useState } from "preact/hooks";
import {Navbar} from "../components/Navbar.tsx";

interface NavbarProps {
    isOpen: boolean;
    url: {
        pathname: string;
    };
}

export default function NavbarIsland(props: NavbarProps) {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    return (
       <>
           <Navbar url={props.url} isOpen={isOpen} setIsOpen={setIsOpen} />
       </>
    );
}
