import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2 w-100' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
            <Button className='w-100' variant='outline-secondary'><FaGithub></FaGithub> Login With Github</Button>
            <div>
                <h4 className='my-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img className='w-100' src={bg} alt="" />
                <div className='w-75 mx-auto text-center position-absolute top-50 start-50 translate-middle text-white'>
                    <h1>Create an Amazing Newspaper</h1>
                    <p className='my-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant='danger'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;