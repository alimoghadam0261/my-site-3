import Head from 'next/head'
import Link from "next/link";
import Layout from '../components/layout'
import Index from '../styles/Index.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {

    return (
        <>
            <Head><title>my fav</title></Head>

            <div className={Index.mainfav}>
                <div className="container">
                    <div className="row">
                        <Layout home/>
                        <div className="col-md-9">

                            <div className={Index.myimgfav}><br/>
                                <h3 style={{fontWeight: 'bold'}}>my Images </h3><br/>



                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/1.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/2.jpg"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/2.jpeg"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/5.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/6.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/7.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/8.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/10.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/12.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/14.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/16.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/17.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/20.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/23.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/27.JPG"} alt="1" loading='lazy'/>
                                </Link></div>

                                <div className={Index.linkimg}><Link href="/">
                                    <img className={Index.imgfav} src={"../images/24.JPG"} alt="1" loading='lazy'/>
                                </Link></div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
