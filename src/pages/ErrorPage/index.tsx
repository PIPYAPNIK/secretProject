import React from 'react';
// @ts-ignore
import { navigate } from 'hookrouter';
import s from './ErrorPage.module.scss';
import Heading from '../../components/Heading';
import TeamRocket from './assets/teamRocket.png';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

const ErrorPage = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.title__wrap}>
          <Heading headingSize={1} className={s.title}>
            404
          </Heading>
        </div>
        <div className={s.rocket__wrap}>
          <img src={TeamRocket} alt="team-rocket" className={s.rocket__img} />
          <Heading headingSize={3} className={s.rocket__title}>
            The rocket team <span>has won this time.</span>
          </Heading>
          <Button onClick={() => navigate(LinkEnum.HOME)} className={s.rocket__button}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
