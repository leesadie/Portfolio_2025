import ClientOnly from "../components/ClientOnly";
import AboutClient2 from "./AboutClient2";
import AboutClient from "./AboutClient";

const AboutPage = () => {
    return (
        <ClientOnly>
            <AboutClient />
        </ClientOnly>
    );
}

export default AboutPage;