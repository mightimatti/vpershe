import React from 'react';
import NavBar from '../Nav';
import './index.less';

const Header = props => (
  <div className="header row">
    <NavBar links={props.links} socialIcons={props.socialIcons} />
    <div>
      <div className="title">Про прое<span className="text-italic">к</span>т</div>
      <div className="description">Замовчування і табуйованість теми сексу вдома та відсутність сексуальної освіти у школах часом має жахливі наслідки, зокрема ранні й небажані вагітності, психологічні травми, згвалтування й венеричні захворювання. Натомість, як переконує світовий досвід, усього цього підліткам допомагає уникнути сексуальна освіта або ж статеве виховання у школах та дитячих садочках. Саме тому в Англії, Швеції, Німеччині та багатьох інших європейських країнах курс сексуальної освіти у школі є обов’язковим. Яка ж вона, європейська сексуальна освіта? </div>
    </div>
  </div>
);

export default Header;
