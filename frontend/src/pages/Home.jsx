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
import Footer from "../components/Layout/Footer";
import Divider from "../components/UI/Divider";
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
      </Layout>
      <hr
        className="mx-auto my-4" // centers horizontally and adds vertical spacing
        style={{
          width: "50%", // half the container width
          borderTop: "4px solid #007bff", // thickness and color
          borderRadius: "2px", // slightly rounded edges
        }}
      />
      <Features />
      <Divider />
      <div
        className="d-flex features justify-content-center bg-white"
        id="features"
      >
        <div className=" pt-2 px-3 rounded-4 ">
          <NotifyForm form_location="page" />
        </div>
      </div>
      <Footer />
    </>
  );
}
