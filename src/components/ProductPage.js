import React from 'react';
import './ProductPage.css';
import productImage from '../assets/image.jpg';

const ProductPage = () => {
    return (
        <div className="product-page">
            <h1>Innovatech VR Pro</h1>
            <p className="company-description">
                Innovatech, a leader in cutting-edge technology, is excited to announce the launch of its latest product, the Innovatech VR Pro. This groundbreaking virtual reality headset is set to redefine the boundaries of immersive experiences. The launch event, an exclusive gathering for industry professionals, tech enthusiasts, and media representatives, will take place on [Insert Date] at [Insert Venue].
            </p>
            <p>Innovatech VR Pro: A New Era in Virtual Reality

                The Innovatech VR Pro promises to revolutionize the VR landscape with its state-of-the-art features and unparalleled performance. Attendees at the launch event will have the unique opportunity to witness live demonstrations and experience firsthand the innovative capabilities of the VR Pro.

                Event Highlights

                Exclusive Product Demonstration: Innovatech’s experts will showcase the VR Pro’s advanced features, including its high-resolution display, enhanced motion tracking, and immersive audio system.

                Interactive VR Stations: Guests can explore various VR experiences, from gaming and virtual tourism to educational applications, demonstrating the VR Pro's versatility.

                Insightful Presentations: Industry leaders and Innovatech executives will discuss the technology behind the VR Pro and its potential impact on various sectors, including entertainment, education, and professional training.

                Networking Opportunities: The event will provide a platform for attendees to connect with like-minded professionals, share ideas, and explore potential collaborations.

                Exciting Giveaways: Attendees will have the chance to win exclusive Innovatech merchandise, with a grand prize of a brand-new Innovatech VR Pro headset.</p>
            <p>RSVP and Contact Information

                To attend the Innovatech VR Pro launch event, please RSVP by [Insert RSVP Deadline] by contacting [Insert Contact Name] at [Insert Email Address] or [Insert Phone Number]. Spaces are limited, so early registration is recommended.

                About Innovatech

                Innovatech is dedicated to pushing the boundaries of technology to create products that enhance and transform the user experience. With a focus on innovation and quality, Innovatech strives to lead the way in the development of new technologies that shape the future.</p>
            <img src={productImage} alt="TechTrek X" className="product-image" /> {}


        </div>
    );
};

export default ProductPage;
