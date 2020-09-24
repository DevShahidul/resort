import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Banner} from '../components/Banner';
import {RoomContext} from '../context';
import defaultBg from '../images/room-1.jpeg';
import {StyledHero} from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        //console.log(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBg
        }
    }

    static contextType = RoomContext;
    
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)

        if(!room){
            return(
                <div className="error">
                    <h4>No such room could be found...</h4>
                    <Link to="/rooms" className="btn-primary">Back to Room</Link>
                </div>
            )
        }

        const {name, description, images, price, size, breakfast, pets, extras, capacity} = room
        const [mainImage, ...defaultImages] = images;
        return (
            <>
                <StyledHero img={mainImage || defaultBg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImages.map((image, index) => <img key={index} src={image} alt={name} />)}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Infos</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: {size} SQFT</h6>
                            <h6>Max Capacity: {capacity < 1 ? `${capacity} people` : `${capacity} person`}</h6>
                            <h6>{pets ? "Pets Allowed" : "Not Pets Allowed"}</h6>
                            {breakfast && <h6>Free breackfast included</h6>}
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
        {extras.map((item, index) => <li key={index}>- {item}</li>)}
                    </ul>
                </section>
            </>
        )
    }
}
