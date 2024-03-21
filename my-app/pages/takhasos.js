import Head from 'next/head'
import Layout from '../components/layout'
import Index from '../styles/Index.module.css'

export default function Home() {

    return (

        <>
            <Head>
                <title> My Specialties</title>
            </Head>
            <div className={Index.mainedu}  >
                <div className="container">
                    <div className="row">

                        <Layout home/>

                        <div className="col-md-9">

                            <div className={Index.infospecialt}>
                                <h3>
                                    My Specialties :
                                </h3><br/>
                                <span className="m-4 badge bg-success">Html</span>
                                <span className="m-4 badge bg-primary">Css</span>
                                <span className="m-4 badge bg-dark">BootStrap</span>
                                <span className="m-4 badge bg-success">Sass</span>
                                <span className="m-4 badge bg-warning">Js</span>
                                <span className="m-4 badge bg-danger">Jq</span>
                                <span className="m-4 badge bg-dark">React Js</span>
                                <span className="m-4 badge bg-success">Next Js</span>
                                <span className="m-4 badge bg-danger">PWA</span>
                                <span className="m-4 badge bg-warning">WebPack</span>
                                <span className="m-4 badge bg-primary">PHP</span>
                                <span className="m-4 badge bg-dark">Laravel</span>
                                <span className="m-4 badge bg-warning">Live Wire</span>
                                <span className="m-4 badge bg-success">Api Rest</span>
                                <span className="m-4 badge bg-danger">Git&GitHub&GitLab</span>
                                <span className="m-4 badge bg-primary">My SQl</span>
                                <span className="m-4 badge bg-dark">WordPress</span>
                                <span className="m-4 badge bg-primary">SEO</span>
                                <span className="m-4 badge bg-warning">NetWork os windows</span>
                                <span className="m-4 badge bg-danger">Scuretiy</span>
                                <span className="m-4 badge bg-primary">Word</span>
                                <span className="m-4 badge bg-dark">Exel</span>
                                <span className="m-4 badge bg-warning">powerpoint</span>
                                <span className="m-4 badge bg-dark">photoshop</span>
                                <span className="m-4 badge bg-success">After Effect</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
