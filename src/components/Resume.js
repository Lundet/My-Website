    // Resume.js
    import React from 'react';
    import '../styles/resume.css';
    function Resume() {
    return (
        <div className="main">
        <section id="resume">
            <h2>Resume</h2>
            <div className="contact-info">
            <p><strong>Hannes Lundin</strong></p>
            <p>Phone: 0763419455</p>
            <p>Email: hannes.j.lundin@gmail.com</p>
            </div>

            <div className="section">
            <h3>Skills</h3>
            <ul>
                <li>Programming: Skilled</li>
                <li>Forklift License: A1-4/B1-4</li>
            </ul>
            </div>

            <div className="section">
            <h3>Languages</h3>
            <ul>
                <li>Swedish: Native</li>
                <li>English: Fluent in speaking and writing</li>
                <li>French: Limited proficiency</li>
            </ul>
            </div>

            <div className="section">
            <h3>Experience</h3>
            <ul>
                <li>
                <strong>Warehouse Picker & Packer, Dreamlogistics</strong>
                <span>June 2018 - November 2019</span>
                <p>Responsible for a section in the warehouse, ensuring efficient completion of tasks.</p>
                </li>
                <li>
                <strong>Elderly Care Assistant, Åbrädden - Helsingborg Municipality</strong>
                <span>August 2016</span>
                <p>Undertook various tasks including assistance, serving, and dishwashing at the elderly care facility.</p>
                </li>
                <li>
                <strong>Advertising Distributor, Svensk Direktreklam</strong>
                <span>April 2014 - August 2014</span>
                <p>Responsible for distributing advertising materials in various residential areas.</p>
                </li>
                <li>
                <strong>Street Cleaning, Helsingborg Municipality</strong>
                <span>
                2013</span>
                <p>Engaged in street cleaning activities throughout the summer.</p>
                </li>
                <li>
                <strong>Sales, Eskilsminnes IF</strong>
                <span>April 2010 - August 2010</span>
                <p>Responsible for sales of Newbody products.</p>
                </li>
            </ul>
            </div>

            <div className="section">
            <h3>Education</h3>
            <ul>
                <li>
                <strong>Web Development, Glimåkra Folk High School</strong>
                <span>2022 – 2024</span>
                <p>Proficient in HTML, CSS, JavaScript, React, PHP, WordPress, MySQL, Git, Node.js, and Express.</p>
                </li>
                <li>
                <strong>Esports Studies, Valjeviken Folk High School</strong>
                <span>2021 - 2022</span>
                </li>
                <li>
                <strong>Esports Studies, Glimåkra Folk High School</strong>
                <span>2020 - 2021</span>
                </li>
                <li>
                <strong>High School, Ljud och Bildskolan</strong>
                <span>2015 - 2018</span>
                <p>Specialization in Technology - Game Development</p>
                </li>
                <li>
                <strong>Elementary School, Elinebergsskolan</strong>
                <span>2006 - 2015</span>
                </li>
            </ul>
            </div>

            <div className="section">
            <h3>Internships</h3>
            <ul>
                <li>
                <strong>Preschool at Tussi Förskola in Helsingborg AB</strong>
                <span>April 2014</span>
                <p>Conducted various tasks and activities with the children at the preschool.</p>
                </li>
            </ul>
            </div>

            <div className="section">
            <h3>References</h3>
            <ul>
                <li>Bjarne Lundqvist, Teacher, Ljud & Bildskolan Helsingborg</li>
                <li>Camilla, Team Leader at Dreamlogistics, 0709166527</li>
            </ul>
            </div>
        </section>
        </div>
    );
    }

    export default Resume;
