import React from 'react'
import scss from '../styles/404.scss'
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
                <meta property="og:image" content="404" title="" alt="" />
                <meta property="twitter:title" content="" />
                <meta property="twitter:description"
                    content="404" />
                <meta property="twitter:image" content="" title="" alt="" />

            </Helmet>

            <Header />
            <link href={scss} rel="stylesheet" type="text/css" />
            <main role="main" class="layout__content">
                <div class="error">
                    <div class="inner error__inner">
                        <div class="error__code">404</div>
                        <div class="error__text">Страница не найдена</div>
                        <a href="/">
                            <button class="hrefVacancies__button_background__blue">
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
export default ErrorPage