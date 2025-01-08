import ClientOnly from "../components/ClientOnly";
import SideClient from "./SideClient";

const SidePage = () => {
    return (
        <ClientOnly>
            <SideClient />
        </ClientOnly>
    );
}

export default SidePage;