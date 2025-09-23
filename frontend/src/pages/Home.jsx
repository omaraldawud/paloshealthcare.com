//
//
//JASON-LT Metas
import {
  SEOMeta,
  seoConfig,
  breadcrumbConfig,
  faqConfig,
  serviceConfig,
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
} from "../components/SEO";
// layouts
import Layout from "../components/Layout/Layout";
import HeroInfoBox from "../components/Layout/hero/HeroInfoBox";
import Features from "../components/Layout/sections/Features";
import NotifyForm from "../components/Layout/forms/NotifyForm";
//images
import heroIMGmedical from "../assets/images/local-medical-business.jpg";
import heroIMGmedical2 from "../assets/images/medical-femal-doctor.jpg";

import FeaturedBusinesses from "../components/Business/functional/FeaturedBusinesses";
import BusinessListingSideBar from "../components/Business/functional/BusinessListingSideBar";

//
export default function Home() {
  return (
    <>
      <div>
        {/* SEO Meta */}
        <SEOMeta {...seoConfig.home} />
        <BreadcrumbSchema items={breadcrumbConfig.home} />
        <FAQSchema questions={faqConfig.home} />
        <ServiceSchema services={serviceConfig.home} />
      </div>{" "}
      <HeroInfoBox
        title="Find & Manage Your Free Medical Listing"
        heroIMG={heroIMGmedical2}
        subtitle="Keep your practice visible and trusted online."
        desc="Update your business details, showcase your services, and ensure patients can easily find, trust, and connect with your practice."
        cta_text="Claim Your Free Listing Today"
      />
      <Layout sidebar={<BusinessListingSideBar />}>
        {/* DIV1 - Hero Info */}

        <FeaturedBusinesses />
        <Features />
        <NotifyForm />
      </Layout>
    </>
  );
}
