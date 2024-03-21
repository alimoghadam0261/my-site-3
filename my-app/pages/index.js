import React from 'react';
import Head from 'next/Head';
import Link from "next/link";
import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.css'
import Index from '../styles/Index.module.css'


import {
    FaInstagramSquare, FaTelegram, FaFacebookSquare, FaWhatsappSquare
    , FaUserAlt, FaUserGraduate, FaMailBulk, FaSpellCheck, FaFingerprint, FaPhoneSquareAlt
} from "react-icons/fa";
import MyEducation from "./MyEducation";

const text1 = '{';
const text2 = '}';
const MyComponent = () => {

    return (<>
            <Head>
                <title>ali mogahdam</title>
            </Head>
            <div id={Index.main}>
            <div className="container" >
                <div className="row">
                    <Layout home/>
                    <div className="col-md-9">
                        <div className="container">
                            <div className={Index.info}>
                                <h4>
                                    const name = Ali Moghadam;<br/><br/>
                                    if (this.name === Me) {text1}
                                    <br/>
                                    return (
                                </h4><br/>
                                <h5 className="Index.hideinof">// hover in balck lines</h5><br/>
                                <p>
                                   My Name is : Ali Moghadam ;<br/>
                                    From : Iran ;<br/>
                                    Born : 1985 ;<br/>
                                    marital status : Marrid ;<br/>
                                    Child : 1 ;<br/>
                                    Education : Master of IT Management ;<br/>
                                </p><br/>
                                <h4>
                                    ) <br/>
                                    {text2}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default MyComponent;


