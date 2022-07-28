import type { NextPage } from "next";
import Hero, { TitleType } from "components/Hero";
import HeroImg from "assets/img/hero_stock.png";
import { Container, Grid } from "components/layout/Layout.styled";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import React from "react";
import DecoratedImg from "components/common/DecoratedImg";
import ProductItem from "../components/common/ProductItem";

const Home: NextPage = () => {
  const title: TitleType = {
    textTop: "It’s high time you told",
    textBottom: "your story",
  };

  return (
    <>
      <Hero
        img={HeroImg}
        title={title}
        subtitle={
          "Storytelling in business has become a field in its own right as industries have grown"
        }
      />
      <Container pt5>
        <Grid>
          <div>
            <Heading headingLevel="h2">
              Medium length title for building block
            </Heading>
            <div className="temp--text-box">
              <p>
                A paragraph or two with information on your product/service or
                describes a problem your product/service is designed to solve.
              </p>
              <p>
                Provide your customers a story they would enjoy keeping in mind
                the objectives of your website. Pay special attention to the
                tone of voice. Try to win the customers’ trust by being
                positive.
              </p>
            </div>
            <Button link="/oferta" type="secondary" text="Zobacz ofertę" />
          </div>
          <DecoratedImg />
        </Grid>
      </Container>
      <Container pt5>
        <Heading headingLevel="h2">Nasza oferta</Heading>
        <ProductItem />
      </Container>
    </>
  );
};

export default Home;
