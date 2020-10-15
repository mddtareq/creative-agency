import React from 'react';
import './ServiceDetails.css';
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Link, useHistory } from 'react-router-dom';
import l from '../../../../images/icons/service1.png'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceDetails = ({ service }) => {
    const { name, description, _id } = service;
    const history = useHistory();
    const services = () => {
        history.push(`/services/${_id}`);
    }
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div className="col-md-4">
            <div className="service-info">
                <div onClick={() => services()} className="text-center">
                    <animated.div
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                    >
                    <img src={l} alt="" />
                    <h6>{name}</h6>
                    <p>{description}</p>
                    </animated.div>
                </div>
            </div>
        </div>
    );
};


export default ServiceDetails;