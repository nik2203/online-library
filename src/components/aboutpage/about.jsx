import React from 'react'
import "./about.css"
import NavBar from '../Navbar/navbar';

function About() {
    return (
        <div>
            <div className='navbar'>
                <NavBar />
            </div>
            <div className='about'>
                Jinchi is a non-profit library of millions of free books available for readers worldwide.

                Jinchi, a non-profit, is building a digital library of Internet sites and other cultural artifacts in digital form. Like a paper library, we provide free access to researchers, historians, scholars, people with print disabilities, and the general public. Our mission is to provide Universal Access to All Knowledge.
                Our website is relatively new and we began by archiving the Internet itself, a medium that was just beginning to grow in use. Like newspapers, the content published on the web in ephemeral - but unlike newspapers, no one is saving it.
                As our web archive grows, so is our commitment to providing digital versions of other publihshed works. The goal for our web archive is for it to become a multimedia hub and for it to contain:
                <ol>
                    <li>
                        625 billion web pages
                    </li><br></br>
                    <li>	38 million books and texts</li>
                    <li>
                        14 million audio recordings (including 240,000 live concerts)
                    </li>
                    <li>
                        7 million videos (including 2 million Television News programs)
                    </li>
                    <li>
                        4 million images
                    </li>
                </ol>
                <br></br>
                <br></br>
                <br></br>

                Anyone with a free account can get access to all the books available on Jinchi. We  work with thousands of partners globally to save copies of their work into special collections.
                The main focus of Jinchi is to serve people who have difficulty ___________ physical books, and to save time and make work easy for people.
                You can find information about our projects on our blog (including important announcements), contact us, buy swag and follow us on Instagram, Twitter and Facebook. Welcome to the library!

            </div>

            <div className='Social'>
                <p>HI THIS IS TESTING</p>
            </div>


        </div>)
}



export default About;