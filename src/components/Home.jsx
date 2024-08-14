import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>

      <Helmet>
        <title>ЭталонТрансСервис — транспортная компания в Пойковском</title>
        <meta name="robots" content="index-follow" />
        <meta
          name="description"
          content="Выполняем комплекс работ в области транспортировки, погрузки и доставки различного перечня грузов для нефтегазового сектора. Мы готовы начать работу с вами."
        />
        <meta
          name="keywords"
          content="Официальный сайт ЭталонТрансСервис, ЭталонТрансСервис Сайты, ЭталонТрансСервис Порталы, ЭталонТрансСервис Предприятие, Предприятие, ЭталонТранс, Альбина Топоркова, транспортировка, погрузка, погрузочно-разгрузочные работы, перевозка, транспортные средства, Западная Сибирь, Пойковский, подготовительно-заключительные работы, завоз, вывоз, подвоз, монтаж, аудит безопасности, бизнес, Профильная аккредитация, вакансии, работа"
        />
        <meta property="og:title" content="Официальный веб-сайт ЭталонТрансСервис" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Выполняем комплекс работ в области транспортировки, погрузки и доставки различного перечня грузов для нефтегазового сектора. Мы готовы начать работу с вами."
        />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" title="" alt="" />
        <meta
          property="twitter:title"
          content="Официальный веб-сайт ЭталонТрансСервис"
        />
        <meta
          property="twitter:description"
          content="Выполняем комплекс работ в области транспортировки, погрузки и доставки различного перечня грузов для нефтегазового сектора. Мы готовы начать работу с вами."
        />
        <meta property="twitter:image" content="" title="" alt="" />

      </Helmet>

      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default Home