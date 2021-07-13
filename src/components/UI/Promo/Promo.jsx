import React from "react";

import {Modal, Player} from "../index";
import {PromoBlock, PromoActions, PromoBg, PromoInfo, PromoLink} from "./styles";

export default function Promo({promo}) {
  return (
    <PromoBlock>
      <PromoBg>
        <PromoBg.Image src={promo?.backdrop} alt="bg"/>
      </PromoBg>

      <PromoInfo>
        <PromoInfo.Title>{promo?.title}</PromoInfo.Title>
        <PromoInfo.Genres>{promo?.genres.join(', ')} {promo?.imdb_rating}/10</PromoInfo.Genres>
        <p style={{color: '#c1c1c1', marginBottom: '10px'}}>{promo?.overview}</p>

        <PromoActions>
          <PromoLink to={`/${promo?.slug}`}>Learn More</PromoLink>
          <Modal
            trigger={
              <PromoActions.Span> <span className="material-icons play">play_circle_filled</span> Play
                Trailer</PromoActions.Span>
            }
            children={<Player url={'://www.youtube.com/watch?v=MG-S05stTv8'}/>}
          />
        </PromoActions>

      </PromoInfo>

    </PromoBlock>
  )
}