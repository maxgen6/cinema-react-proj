import React from "react";
import { Link } from "react-router-dom";

import './Promo.scss'
import {Modal, Player} from "../index";
import {PromoActions, PromoBg, PromoBlock, PromoInfo} from "./styles";

export default function Promo({ promo }) {
  return (
    <PromoBlock className="promo">
      <PromoBg>
        <img src={promo?.backdrop} alt="bg"/>
      </PromoBg>
      <PromoInfo >
        <h1>{promo?.title}</h1>
        <p>{promo?.genres.join(', ')}  {promo?.imdb_rating}/10</p>
        <p style={{color: '#c1c1c1'}}>{promo?.overview}</p>
        <PromoActions>
          <Link to={`/${promo?.slug}`}>Learn More</Link>
          <Modal
            trigger={
              <span> <span className="material-icons play">play_circle_filled</span> Play Trailer</span>
            }
            children={<Player url={'://www.youtube.com/watch?v=MG-S05stTv8'} />}
          />
        </PromoActions>
      </PromoInfo>
    </PromoBlock>
  )
}