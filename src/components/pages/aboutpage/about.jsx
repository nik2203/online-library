import React from 'react'
import "./about.css"
import nikhilg from "../../../assets/nikhilg.jpeg"
import charan from "../../../assets/charan.jpeg"
import nive from "../../../assets/nive.jpeg"
import Footer from '../../footer/footer'

function About() {
    return (
        <div>
            <center>
                <div className='about'>
                    Jinchi is a non-profit library of millions of free books available for readers worldwide.

                    Like a paper library, we provide free access to researchers, historians, scholars, people with print disabilities, and the general public.
                    <br />
                    <br />
                    <br />
                    <br />
                    Our mission is to provide Universal Access to All Knowledge.
                    As our web archive grows, so is our commitment to providing digital versions of other published works.
                    <br />
                    <br />
                    <br />
                    <br />
                    Anyone with a free account can get access to all the books available on Jinchi.
                    <br />
                    The main focus of Jinchi is to serve people who have difficulty accessing physical books, and to save time and make work easy for people.
                    You can find information about our projects on our social pages (including important announcements), contact us, and follow us on Instagram, Twitter and Facebook. Welcome to the library!
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='team'>



                    <h2 className='header'>MEET OUR TEAM</h2>
                    <div class="row">

                        <div class="column">
                            <img class="im1" src={nikhilg} id="nikhil" alt="jinchi_logo"></img>
                            <p><a href="https://github.com/nik2203">NIKHIL GIRISH </a></p>
                        </div>
                        <div class="column">
                            <img class="im1" src={charan} id="charan" alt="jinchi_logo"></img>
                            <p><a href="https://github.com/saicharan1901">SAI CHARAN </a></p>
                        </div>
                        <div class="column">
                            <img class="im1" src={nive} alt="jinchi_logo"></img>
                            <p><a href="https://github.com/nive404">P NIVEDITHA</a></p>
                        </div>
                    </div>
                </div>
                <div className="foot">
                    <Footer />
                </div>
            </center>
        </div>)
}



export default About;