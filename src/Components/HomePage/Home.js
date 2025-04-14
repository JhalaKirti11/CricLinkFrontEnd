import Banner from "./Banner.js";
import ContactUs from "./ContactUs.js";
import Players from "./Player.js";
import UpcomingEvent from "./UpcomingEvents.js";
import Header from '../Header.js';
import Footer from '../Footer.js';
import { useEffect, useState } from "react";
import axios from "axios";
import url from "../../URL/url.js";
import Teams from "./Teams.js";

export default function Home() {
    let [searchedList, setSearchedList] = useState('');
    let [filteredData, setFilteredData] = useState([]);
           
    return (
        <>
            <Header setSearchedList={setSearchedList} />
            <div className="d-flex flex-column align-items-center gap-4">
                { searchedList ?
                        <h1>
                            No Record found
                        </h1>
                        :
                        <>
                            <Banner />
                            <div id="sectionLine"></div>
                            <Players filteredData={[]} />
                            <div id="sectionLine"></div>

                            <Teams/>
                            <div id="sectionLine"></div>

                            <h1 className="text-center mb-4 text-light">Upcoming Events</h1>
                            <UpcomingEvent />
                            <div id="sectionLine"></div>
                            <ContactUs />
                        </>
                }
                <div id="sectionLine"></div>
                <Footer />
            </div>
        </>
    );
}
