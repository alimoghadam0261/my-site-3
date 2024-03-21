import React from 'react';
import Link from "next/link";


import 'bootstrap/dist/css/bootstrap.css'
import Index from '../styles/Index.module.css'


import {FaInstagramSquare, FaTelegram, FaFacebookSquare, FaLinkedin
    ,FaUserAlt,FaUserGraduate,FaMailBulk,FaSpellCheck,FaFingerprint,FaPhoneSquareAlt
} from "react-icons/fa";


export default function Layout({ children, home }){

    return (


                    <div className='col-md-3' id={Index.sidebar}>
                        <img id={Index.imgsidebar} src={"./images/2.jpeg"} alt="profile"/>
                        <br/><br/>
                       <h2 id={Index.namesidebar}> [ Ali Moghadam ]</h2>
                        <hr/>
                        <br/>
                        <ul className={Index.ulsidebar}>
                            <li><Link href={"/"}><h5><FaUserAlt/>  Who Am I ?</h5></Link></li>
                            <li><Link href={"/MyEducation"}><h5><FaUserGraduate/>  My Education</h5></Link></li>
                            <li><Link href={"/work"}><h5><FaMailBulk/> Work History</h5></Link></li>
                            <li><Link href={"/takhasos"}><h5><FaSpellCheck/>   My Specialties</h5></Link></li>
                            <li><Link href={"/MyFav"}><h5><FaFingerprint/>   My Gallery</h5></Link></li>
                            <li><Link href={"/contact"}><h5><FaPhoneSquareAlt/>   Contact Me</h5></Link></li>

                            <br/>
                        </ul>
                        <hr/>
                        <div className={Index.soicalsidebar}>
                            <Link href="/"><FaInstagramSquare size={40} className={Index.soicalicon}/></Link>
                            <Link href="/"><FaTelegram size={40} className={Index.soicalicon}/></Link>
                            <Link href="/"><FaFacebookSquare size={40} className={Index.soicalicon}/></Link>
                            <Link href="/"><FaLinkedin size={40} className={Index.soicalicon} /></Link>
                        </div>
                    </div>



    );
};


