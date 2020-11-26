import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"

export const Rooms = () => {
    return <Hero hero="roomsHero" >
        <Banner title="our rooms" >
        <Link to='/' className='btn-primary'>
                Home
            </Link>
        </Banner>
    </Hero>
}
