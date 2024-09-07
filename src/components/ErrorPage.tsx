import React from 'react'
import '../styles/404.scss'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <>

            <Helmet>
                <title>Вход в MongoDB</title>
                <meta name="description"
                    content="404" />
                <meta name="keywords"
                    content="404" />
                <meta property="og:title" content="404" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="404" />
                <meta property="og:url" content="404" />
                <meta property="og:image" content="404" title="" />
                <meta property="twitter:title" content="" />
                <meta property="twitter:description"
                    content="404" />
                <meta property="twitter:image" content="" title="" />

            </Helmet>

            <Header />
            <main role="main" className="layout__content">
                <div className="error">
                    <div className="inner error__inner">
                        <div className="error__code">404</div>
                        <div className="error__text">Страница не найдена</div>
                        <a href="/">
                            <button className="hrefVacancies__button_background__blue">
                                {/* <Link to={'/'}> */}

                                Перейти на главную
                                {/* </Link> */}
                            </button>
                        </a>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default ErrorPage;