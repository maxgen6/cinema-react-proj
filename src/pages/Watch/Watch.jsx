import React from "react";

import { AboutFilm, BigPromo } from "../../components/ui";
import { Like, Friends } from "../../components/icons";
import './Watch.scss'

export default function Watch() {
  return (
    <section className="watch">
      <div className="container">
        <h1 className="watch-title">Watch</h1>

        <article className="watch-content">
          <BigPromo />

          <div className="film-info">
            <div className="film-info__header">
              <h2>Once Upon a Time in Hollywood</h2>
              <div className="button-block">
                <span className="button-block__point">IMDb 7.7</span>
                <button>
                  <span>
                    <Like />
                  </span> Watch Later
                </button>
                <button>
                  <span>
                    <Friends />
                  </span> Invite Friends
                </button>
              </div>
            </div>
            <AboutFilm />
          </div>

        </article>
      </div>
    </section>
  )
}