import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import Hero from "../components/Hero"


export const Home = () => {
    return <Hero hero="defaultHero">

        <Banner 
            title="luxurious rooms" 
            subtitle="deluxe rooms starting @ $999"
        >
            <Link to='/rooms' className="btn-primary" >
                See rooms
            </Link>
        </Banner>
    </Hero>
}


