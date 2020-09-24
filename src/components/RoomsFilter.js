import React, {useContext} from 'react';
import {RoomContext} from '../context';
import {Title} from './Title';

// Get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // Get unique type
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((type, index) => {
        return <option value={type} key={index}>{type}</option>
    })

    // Get unique capacity
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Search rooms" />
            <form className="filter-form">
                {/* Select type */}
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select name="type" id="type" className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* //End select type */}

                {/* Select Guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select name="capacity" id="capacity" className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* //End select type */}

                {/* Select Room price */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" name="price" id="price" value={price} min={minPrice} max={maxPrice} onChange={handleChange} className="form-control" />
                </div>
                {/* //End select type */}

                {/* Select Room Size */}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                </div>
                {/* //End select type */}

                {/* Select extra */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" value={breakfast} onChange={handleChange} className="size-input" />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" value={pets} onChange={handleChange} className="size-input" />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* //End select type */}
            </form>
        </section>
    )
}
