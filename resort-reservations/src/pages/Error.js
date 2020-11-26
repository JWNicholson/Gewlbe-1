import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import Hero from "../components/Hero"


export const Error = () => {
    return (
    <Hero hero="defaultHero">
        <Banner title='404' subtitle="page not found">
            <Link to='/' className='btn-primary'>
                Home
            </Link>
        </Banner>
    </Hero>
    )
}

