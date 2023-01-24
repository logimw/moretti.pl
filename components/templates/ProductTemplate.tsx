import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Hero from "components/Hero";
import Heading from "components/common/Heading";
import Breadcrumbs from "components/common/Breadcrumbs";
import GridGallery from "components/common/GridGallery";
import TextBox from "components/common/TextBox";
import Slider from "components/Slider";
import Cta from "components/common/Cta";
import Testimonials from "components/Testimonials";
import Partners from "components/layout/Partners";
import Seo from "components/Seo";
import { Container, FullSectionGray } from "components/layout/Layout.styled";
import { ProductTemplateProps } from "interfaces/product.interface";
import * as Utils from "utils";
import AnimatedOnScroll from "../AnimatedOnScroll";
import React from "react";
import { useImageViewer } from "react-image-viewer-hook";

const ProductTemplate = ({ data }: { data: ProductTemplateProps }) => {
  const testimonials = data.testimonials;
  const customers = data.customers;
  const cta = data.cta;
  const product = data.product.attributes;
  const gallery = product.gallery.data;
  const sliderPhotos = product.slidersPhotos.data;
  const [{ textContent, image }] = product.descriptionBottomWithImage;
  const url = process.env.BASE_URL + image.data.attributes.url;
  const heroUrl = process.env.BASE_URL + product.heroImage.data.attributes.url;
  const { getOnClick, ImageViewer } = useImageViewer();
  return (
    <>
      <Seo
        seoTitle={product.seoTitle}
        seoDescription={product.seoDescription}
        ogImage={heroUrl}
      />
      <Hero img={heroUrl} secondary textCenter>
        <Heading headingLevel="h1" isCenter>
          {product.name}
        </Heading>
        <Breadcrumbs />
      </Hero>
      <Container>
        <GridGallery content={gallery} />
      </Container>

      <Container>
        <TextBox>
          <ReactMarkdown>{product.descriptionTop}</ReactMarkdown>
        </TextBox>
        <TextBox>
          <div className="img-inside">
            <ReactMarkdown className="with-img">{textContent}</ReactMarkdown>
            <Image
              src={url}
              height={250}
              width={250}
              className="responsive-fill-img content-image"
              placeholder="blur"
              blurDataURL={Utils.placeholder}
              alt={image.data.attributes.alternativeText}
            />
          </div>
        </TextBox>
        <AnimatedOnScroll>
          <Heading headingLevel="h2" isDecorated>
            Zobacz zdjęcia
          </Heading>
          <Slider {...{ getOnClick }} content={sliderPhotos} />
        </AnimatedOnScroll>
      </Container>

      <FullSectionGray>
        <Cta content={cta} />
      </FullSectionGray>

      <Container>
        <Testimonials data={testimonials} />
      </Container>
      <Partners partners={customers} />
      <ImageViewer />
    </>
  );
};

export default ProductTemplate;
