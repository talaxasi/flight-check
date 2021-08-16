import React, {useState} from 'react';
import './FlightsList.scss';
import {useDispatch, useSelector} from "react-redux";
import {
  addFavorite,
  authLogout,
  flightDayRequest,
  removeFavorite
} from "../../store/actions";
import Carousel from "../Carousel/Slider";
import Slider from "../Carousel/Slider";

const FlightsList = () => {
  const [date, setDate] = useState([]);
  const dispatch = useDispatch();
  const flightDate = useSelector(state => state.flightDate);
  const favorites = useSelector(state => state.favorites);

  const handleExitClick = e => {
    dispatch(authLogout());
  }

  const handleChangeCalendar = e => {
    const dateNumeric = e.target.valueAsDate.toLocaleString('ru', {
      month: 'numeric',
      day: 'numeric'
    }).split('.');
    const dateLong = e.target.valueAsDate.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).split(' ')

    setDate(dateLong);
    dispatch(flightDayRequest({
      day: dateNumeric[0],
      month: dateNumeric[1]
    }))
  }

  const handleClickFavorite = e => {
    const id = e.target.id;
    favorites.includes(id) ? dispatch(removeFavorite(id)) : dispatch(addFavorite(e.target.id));
  }

  return (
      <div className={"FlightsList"}>
        <header className={"FlightsList__header"}>
          <button className={"button-exit"} onClick={handleExitClick}>
            <p className={"button-exit__title"}>Выйти</p>
            <span className={"button-exit__image"}/>
          </button>
        </header>

        <main className={"FlightsList__main"}>
          <div className={"list"}>
            <header className={"list-header"}>
              <div className={"list-header__title-container"}>
                <h2 className={"list-header__title"}>Вылеты
                  <span className={"list-header__icon-arrow"}/>
                </h2>
                <p className={"list-header__title"}>SVO - JFK</p>
              </div>

              <div className={"list-header__calendar-container"}>
                <p className={"list-header__date"}>{date[0]} {date[1]} {date[2]}</p>
                <input className={"list-header__calendar"} type={"date"} onChange={handleChangeCalendar}/>
              </div>
            </header>

            <div className={"carousel"}>
              <Slider/>
            </div>

            <main className={"list-main"}>
              <p className={"list-main__counter"}>Добавлено в Избранное:
                <span> {favorites ? favorites.length : 0}</span> рейсов</p>
              <div className={"list-main__container"}>
                {flightDate.date ? flightDate.flightsList.map(item => {
                  const {time, price, company} = item;
                  const id = flightDate.date + time;
                  return (
                      <div className={"flight-card"} key={id}>
                        <div className={"flight-card__logo"}><span className={"airplane"}/></div>

                        <div className={"flight-card__body-container"}>
                          <p className={"flight-card__destination"}>Moscow (SVO)
                            <span className={"arrowRightMini"}/>New York City (JFK)</p>
                          <div className={"flight-card__date-container"}>
                            <div className={"flight-card__date"}>{date[0]} {date[1]} {date[2]}</div>
                            <span className={"hyphen"}/>
                            <div className={"flight-card__time"}>{time}</div>
                          </div>
                          <div className={"flight-card__company"}>{company}</div>
                        </div>

                        <div className={"flight-card__amount-container"}>
                          <button className={`flight-card__button-favorite flight-card__button-favorite${
                            favorites.includes(id) ? '_full' : '_hollow'
                          }`}
                                  id={flightDate.date + time}
                                  onClick={handleClickFavorite}/>

                          <div className={"flight-card__price-container"}>
                            <p className={"flight-card__price"}>Price:</p>
                            <p className={"flight-card__amount"}>{price} ₽</p>
                          </div>
                        </div>

                      </div>
                  )
                }) : <p>На выбранную дату нет рейсов</p>}
              </div>
            </main>
          </div>
        </main>
      </div>
  )
}

export default FlightsList;