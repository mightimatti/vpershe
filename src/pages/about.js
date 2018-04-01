import React from 'react'
import Link from 'gatsby-link'

require('../layouts/bootstrap/dist/css/bootstrap.css')

const AboutPage = () => {
  return (
    <div className="container">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col text-center">
          <h1>Про нас</h1>
        </div>
      </div>
      <div className="row jumbotron">
        <p>
          ВПЕРШЕ - онлайн-проект про сексуальну освіту для підлітків. Ми подаємо
          перевірену та корисну для підлітків інформацію про секс та
          сексуальність в інтерактивному форматі. Основна наша мета - створити
          комфортне місце, де молоді люди зможуть знайти підтверджену інформацію
          про своє здоров'я. Наша команда - спеціалісти з комунікацій,
          нейронауки та роботи з підлітками. Разом з нами над сайтом працюють
          експерти з гінeкології, психології та сексології.
        </p>
      </div>
      <div className="row flex-nowrap justify-content-center align-items-center">
        <div className="col text-center">
          <h1>Контакти</h1>
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-4 col-md-offset-2 text-center">
        <a href="http://facebook.com/katya.myachina">
          <img
            className="img-circle text-center"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            width="140"
            height="140"
          />
          </a>
        </div>
        <div className="col-md-4 text-center">
          <h3>
            <a href="http://facebook.com/katya.myachina">
              Катя Мячіна
            </a>
          </h3>
          <span className="card-text mb-auto">
            куратор проекту
          </span>
           <p className="card-text mb-auto">
           katya.myachina@gmail.com
           </p>
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-4 col-md-offset-2 text-center">
          <h3>
            <a
              className="text-dark"
              href="http://facebook.com/yulia.kovalchuk.568">
              Юлія Ковальчук
            </a>
          </h3>
          <span className="card-text mb-auto">
            фінансовий менеджeр 
          </span>
          <p className="card-text mb-auto">
             ykovalchuk137@gmail.com
          </p>
          </div>
          <div className="col-md-4 text-center">
          <a href="http://facebook.com/yulia.kovalchuk.568">
          <img
            className="img-circle text-center"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            width="140"
            height="140"/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

