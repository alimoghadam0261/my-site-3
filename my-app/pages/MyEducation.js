import Head from 'next/head'
import Layout from '../components/layout'
import Index from '../styles/Index.module.css'



export default function Home() {

    return (
      <>
            <Head>
                <title>my edu</title>
            </Head>
          <div className={Index.mainedu}>
     <div className="container">
         <div className="row">

                 <Layout home />

             <div className="col-md-9">
                <div className={Index.infoeducation}>
                    <h3>
                        My Qualifications:
                    </h3><br/>
                    <span className="badge bg-dark m-2">math diploma</span>
                    <span className="badge bg-dark m-2">Above Diploma in Fluid Mechanics</span>
                    <span className="badge bg-dark m-2">Bachelor of IT</span>
                    <span className="badge bg-dark m-2">Master of IT Management</span> <br/>
                    <p className='bg-warning'>
                        ! Of course, I did not complete the mathematics, hardware, and software majors in my undergraduate degree
                    </p><br/>
                    <hr/>
                    <h3>
                        Document Without University :

                    </h3><br/>
                    <span className="badge bg-primary m-2">40 hours of Photoshop course in the young school of Karaj</span>
                    <span className="badge bg-primary m-2">30 hours of After Effect course in the young school of Karaj</span>
                    <span className="badge bg-primary m-2">20 hours of FrontEnd Developer course in the Bartar school of Karaj</span>
                    <span className="badge bg-primary m-2">MCSE course in the Tehran Technical Complex of Karaj (2003)</span>
                    <span className="badge bg-primary m-2">Android introductory course with Java in the Sharif University of Technology</span>
                </div>
             </div>
         </div>
     </div>
          </div>
      </>
    )
}
