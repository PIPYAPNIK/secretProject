import React, { useState } from 'react';
import s from './PokemonSlider.module.scss';
// @ts-ignore
import ArrowLeft from './assets/arrowLeft.png';
// @ts-ignore
import ArrowRight from './assets/arrowRight.png';
// @ts-ignore
import PokeBoll from './assets/pokeBoll.png';
import Slider from 'react-slick';
import cn from 'classnames';
import { IPokemonItem } from '../PokemonCard';
import { toCapitalizeWord } from '../../utils/toCapitalizeWord';

interface IPokemonsSlider {
  title: string;
  pokemons: Array<IPokemonItem>;
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={cn(className, s['slider-arrow'], s.next)} style={{ ...style }} onClick={onClick}>
      <img src={ArrowRight} />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={cn(className, s['slider-arrow'], s.prev)} style={{ ...style }} onClick={onClick}>
      <img src={ArrowLeft} />
    </div>
  );
}

const sliderSettings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const maxHpPrc = 255 / 100;
const maxExpProc = 608 / 100;
const maxAttackProc = 190 / 100;
const maxDefenseProc = 230 / 100;
const maxSpecDefenseProc = 230 / 100;
const maxSpecAttackProc = 190 / 100;

const PokemonsSlider: React.FC<IPokemonsSlider> = ({ title = '', pokemons = [] }) => {
  const pokemonsByType = pokemons?.filter((el) => el.types.includes(title));
  const [activePokemon, setActivePokemon] = useState(pokemonsByType[0]);

  return (
    <section className={s.root}>
      <h2 className={s['slider-title']}>{toCapitalizeWord(title)}</h2>
      <div className={s['active-slide']}>
        <div className={s['active-slide__image']}>
          <img src={activePokemon?.img} alt={activePokemon?.name} />
        </div>
        <div className={s['active-slide__info']}>
          <h3 className={s['pokemon-name']}>{toCapitalizeWord(activePokemon ? activePokemon?.name : '')}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <div className={s.stats}>
            <div className={s.stats__item}>
              <div className={s.name}>Healthy Points</div>
              <div className={s.metric}>{activePokemon?.stats?.hp}</div>
              <div className={s['metric-line']}>
                <div className={s['metric-line__all']} />
                <div
                  className={s['metric-line__item']}
                  style={{ width: `${Math.round(activePokemon?.stats?.hp / maxHpPrc)}%` }}
                />
              </div>
            </div>
            <div className={s.stats__item}>
              <div className={s.name}>Experience</div>
              <div className={s.metric}>{activePokemon?.base_experience}</div>
              <div className={s['metric-line']}>
                <div className={s['metric-line__all']} />
                <div
                  className={s['metric-line__item']}
                  style={{ width: `${Math.round(activePokemon?.base_experience / maxExpProc)}%` }}
                />
              </div>
            </div>
            <div className={s.stats__item}>
              <div className={s.name}>Attack</div>
              <div className={s.metric}>{activePokemon?.stats?.attack}</div>
              <div className={s['metric-line']}>
                <div className={s['metric-line__all']} />
                <div
                  className={s['metric-line__item']}
                  style={{ width: `${Math.round(activePokemon?.stats?.attack / maxAttackProc)}%` }}
                />
              </div>
            </div>
            <div className={s.stats__item}>
              <div className={s.name}>Defense</div>
              <div className={s.metric}>{activePokemon?.stats?.defense}</div>
              <div className={s['metric-line']}>
                <div className={s['metric-line__all']} />
                <div
                  className={s['metric-line__item']}
                  style={{ width: `${Math.round(activePokemon?.stats?.defense / maxDefenseProc)}%` }}
                />
              </div>
            </div>
            <div className={s.stats__item}>
              <div className={s.name}>Special Attack</div>
              <div className={s.metric}>{activePokemon?.stats?.['special-attack']}</div>
              <div className={s['metric-line']}>
                <div className={s['metric-line__all']} />
                <div
                  className={s['metric-line__item']}
                  style={{ width: `${Math.round(activePokemon?.stats?.['special-attack'] / maxSpecAttackProc)}%` }}
                />
              </div>
            </div>
            <div className={s.stats__item}>
              <div className={s.name}>Special Defense</div>
              <div className={s.metric}>{activePokemon?.stats?.['special-defense']}</div>
              <div className={s['metric-line']}>
                <div className={s['metric-line__all']} />
                <div
                  className={s['metric-line__item']}
                  style={{ width: `${Math.round(activePokemon?.stats?.['special-defense'] / maxSpecDefenseProc)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s['slides-block']}>
        <Slider {...sliderSettings}>
          {pokemonsByType.map((el) => {
            return (
              <div className={cn(s['slide-wrapper'], el.id === activePokemon.id ? s.active : '')}>
                <div className={s.slide} onClick={() => setActivePokemon(el)}>
                  <img className={s.slide__image} src={el?.img} alt={toCapitalizeWord(el ? el?.name : '')} />
                  <div className={s.slide__name}>
                    <p>{toCapitalizeWord(el ? el?.name : '').replace(/[^ ]+ /, '')}</p>
                    <img src={PokeBoll} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default PokemonsSlider;
