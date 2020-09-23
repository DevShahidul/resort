import React, { Component } from 'react'
import {Title} from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state ={
        services:[
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus quis mi at vehicula.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus quis mi at vehicula.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus quis mi at vehicula.'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus quis mi at vehicula.'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="services">
                    <Title title="Services" />
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            const {title, info, icon} = item;
                            return(
                                <article className="service" key={index}>
                                    <span>{icon}</span>
                                    <h6>{title}</h6>
                                    <p>{info}</p>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
