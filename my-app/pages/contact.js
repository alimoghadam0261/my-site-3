import Head from 'next/head'
import Layout from '../components/layout'
import Index from '../styles/Index.module.css'

import {FaInstagramSquare, FaTelegram, FaFacebookSquare, FaLinkedin,FaPhoneAlt
    ,FaEnvelope
} from "react-icons/fa";
import Link from "next/link";

export default function Home() {

    return (
        <>
            <Head>
                <title>contact</title>
            </Head>
            <div className={Index.mainedu}>
                <div className="container">
                    <div className="row">

                        <Layout home />

                        <div className="col-md-9">
                         <div className={Index.contact}>
                             <br/><br/><h3>
                                 I'm happy to be able to help you or work with you. You can contact me from the following sources.
                             </h3>
                             <br/><br/>
                             <div className={Index.soicalsidebar}>
                             <span><FaPhoneAlt size={40}/></span><h5>Tel & Whatsapp : </h5><span className='badge bg-dark'>+989120649505</span>
                             </div>
                             <br/><br/>
                             <div className={Index.soicalsidebar}>
                                 <Link href="/"><FaInstagramSquare size={60} className={Index.soicalicon}/></Link>
                                 <Link href="/"><FaTelegram size={60} className={Index.soicalicon}/></Link>
                                 <Link href="/"><FaFacebookSquare size={60} className={Index.soicalicon}/></Link>
                                 <Link href="/"><FaLinkedin size={60} className={Index.soicalicon} /></Link>
                                 <Link href="/"><FaEnvelope size={60} className={Index.soicalicon} /></Link>
                             </div>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
