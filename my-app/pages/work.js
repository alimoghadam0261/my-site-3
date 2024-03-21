import Head from 'next/head'
import Layout from '../components/layout'
import Index from '../styles/Index.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>my Work</title>
            </Head>
            <div className={Index.mainwork}>
                <div className="container">
                    <div className="row">

                        <Layout home/>

                        <div className="col-md-9">
                            <div className={Index.infowork}>
                                <h3>
                                    My Work History :
                                </h3><br/>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Job position</th>
                                        <th scope="col">Duration of activity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Islamic Azad University, Karaj Branch</td>
                                        <td>Computer and Telecommunication Network Project Manager</td>
                                        <td>4 Years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Saipa Automotive</td>
                                        <td>Network Computer Project Manager</td>
                                        <td>2 Years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Tehran Metro Company</td>
                                        <td>Computer Network Security Expert</td>
                                        <td>5 Years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td >Melat Bank</td>
                                        <td>Network Computer Project Manager</td>
                                        <td>1 Year</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td >Arsha Web</td>
                                        <td>Developer</td>
                                        <td>2 Years</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <p className='bg-warning'>
                                   ! I also programmed for freelancer for about 10 months
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
