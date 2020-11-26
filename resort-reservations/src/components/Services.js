import React, { Component } from 'react'
import { Title } from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"Port-salut gouda queso. Caerphilly roquefort stilton queso fondue cheese on toast monterey jack emmental."
            },
            {
                icon:<FaHiking/>,
                title:"Hiking Trails",
                info:"Port-salut gouda queso. Caerphilly roquefort stilton queso fondue cheese on toast monterey jack emmental." 
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info:"Port-salut gouda queso. Caerphilly roquefort stilton queso fondue cheese on toast monterey jack emmental." 
            },
            {
                icon:<FaBeer/>,
                title:"free beer",
                info:"Port-salut gouda queso. Caerphilly roquefort stilton queso fondue cheese on toast monterey jack emmental."  
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

