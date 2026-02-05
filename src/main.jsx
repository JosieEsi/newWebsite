import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ErrorFallback from "./components/ErrorFallback.jsx";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all page components for code splitting
const Contact = lazy(() => import("./pages/Contact.jsx"));
const PDAAFRICA = lazy(() => import("./pages/PDAAFRICA.jsx"));
const DonateForm = lazy(() => import("./components/DonateForm.jsx"));
const ThankYouPage = lazy(() => import("./components/ThankYouPage.jsx"));
const DataAnalytics = lazy(() => import("./pages/DataAnalytics.jsx"));
const CCLP = lazy(() => import("./pages/CCLP.jsx"));
const Nyonkopa = lazy(() => import("./pages/Nyonkopa.jsx"));
const VSLA = lazy(() => import("./pages/VSLA.jsx"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre.jsx"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo.jsx"));
const EthicalReviewCommittee = lazy(() => import("./pages/EthicalReviewCommittee.jsx"));
const Staff = lazy(() => import("./pages/Staff.jsx"));
const Teams = lazy(() => import("./pages/Teams.jsx"));
const ChildAbuseTracker = lazy(() => import("./pages/ChildAbuseTracker.jsx"));
const Covid19 = lazy(() => import("./pages/Covid19.jsx"));
const OurImpact = lazy(() => import("./pages/OurImpact.jsx"));
const Publications = lazy(() => import("./pages/Publications.jsx"));
const PublicationViewer = lazy(() => import("./pages/PublicationViewer.jsx"));
const EdemProfile = lazy(() => import("./pages/EdemProfile.jsx"));
const VidPic = lazy(() => import("./pages/VidPic.jsx"));
const Videos = lazy(() => import("./pages/Videos.jsx"));
const Photos = lazy(() => import("./pages/Photos.jsx"));
const Podcast = lazy(() => import("./pages/Podcast.jsx"));
const Vodcast = lazy(() => import("./pages/Vodcast.jsx"));
const BoardOfDirectors = lazy(() => import("./pages/BoardOfDirectors.jsx"));
const CCLPDashboard = lazy(() => import("./pages/CCLPDashboard.jsx"));
const VSLADashboard = lazy(() => import("./pages/VSLADashboard.jsx"));
const NCLRDashboard = lazy(() => import("./pages/NCLRDashboard.jsx"));
const UnderConstruction = lazy(() => import("./components/UnderConstruction.jsx"));
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));
const ArchivesPage = lazy(() => import("./pages/ArchivesPage.jsx"));
const NewsAndActivities = lazy(() => import("./pages/NewsAndActivities.jsx"));
const NewsDetail = lazy(() => import("./pages/NewsDetail.jsx"));
const PartnersPage = lazy(() => import("./pages/PartnersPage.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange mb-4"></div>
      <p className="text-gray-600 font-poppins">Loading...</p>
    </div>
  </div>
);

// Wrapper component to add Suspense
const LazyWrapper = ({ children }) => (
  <Suspense fallback={<PageLoader />}>
    {children}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "/pdaafrica/dataanalytics",
        element: <LazyWrapper><DataAnalytics /></LazyWrapper>,
      },
      {
        path: "/pdaafrica/dataanalytics/cclp-dashboard",
        element: <LazyWrapper><CCLPDashboard /></LazyWrapper>,
      },
      {
        path: "/pdaafrica/dataanalytics/vsla-dashboard",
        element: <LazyWrapper><VSLADashboard /></LazyWrapper>,
      },
      {
        path: "/pdaafrica/dataanalytics/nclr-dashboard",
        element: <LazyWrapper><NCLRDashboard /></LazyWrapper>,
      },
      {
        path: "/pdaafrica/cocoa-communities-library-project",
        element: <LazyWrapper><CCLP /></LazyWrapper>,
      },
      {
        path: "/pdaafrica/nyonkopa-child-labour-remediation",
        element: <LazyWrapper><Nyonkopa /></LazyWrapper>,
      },
      {
        path: "/pdaafrica/financial-inclusion-and-vsla",
        element: <LazyWrapper><VSLA /></LazyWrapper>,
      },
      {
        path: "/contact",
        element: <LazyWrapper><Contact /></LazyWrapper>,
      },
      {
        path: "/pdaafrica",
        element: <LazyWrapper><PDAAFRICA /></LazyWrapper>,
      },
      {
        path: "/pdaafrica/donate",
        element: <LazyWrapper><DonateForm /></LazyWrapper>,
      },
      {
        path: "/pdaafrica/thank-you",
        element: <LazyWrapper><ThankYouPage /></LazyWrapper>,
      },
      {
        path: "/landing-page",
        element: <LazyWrapper><LandingPage /></LazyWrapper>,
      },
      {
        path: "/who-we-are",
        element: <LazyWrapper><WhoWeAre /></LazyWrapper>,
      },
      {
        path: "/what-we-do",
        element: <LazyWrapper><WhatWeDo /></LazyWrapper>,
      },
      {
        path: "/our-projects",
        element: <LazyWrapper><ProjectsPage /></LazyWrapper>,
      },
      {
        path: "/projects/:slug",
        element: <LazyWrapper><ProjectDetail /></LazyWrapper>,
      },
      {
        path: "/archives",
        element: <LazyWrapper><ArchivesPage /></LazyWrapper>,
      },
      {
        path: "/archives/:slug",
        element: <LazyWrapper><ProjectDetail /></LazyWrapper>,
      },
      {
        path: "/our-impact",
        element: <LazyWrapper><OurImpact /></LazyWrapper>,
      },
      {
        path: "/publications",
        element: <LazyWrapper><Publications /></LazyWrapper>,
      },
      {
        path: "/publication-viewer",
        element: <LazyWrapper><PublicationViewer /></LazyWrapper>,
      },
      {
        path: "/videos-pictures",
        element: <LazyWrapper><VidPic /></LazyWrapper>,
      },
      {
        path: "/videos",
        element: <LazyWrapper><Videos /></LazyWrapper>,
      },
      {
        path: "/photos",
        element: <LazyWrapper><Photos /></LazyWrapper>,
      },
      {
        path: "/podcast",
        element: <LazyWrapper><Podcast /></LazyWrapper>,
      },
      {
        path: "/vodcast",
        element: <LazyWrapper><Vodcast /></LazyWrapper>,
      },
      {
        path: "/staff",
        element: <LazyWrapper><Staff /></LazyWrapper>,
      },
      {
        path: "/edem-profile",
        element: <LazyWrapper><EdemProfile /></LazyWrapper>,
      },
      {
        path: "/board",
        element: <LazyWrapper><BoardOfDirectors /></LazyWrapper>,
      },
      {
        path: "/teams",
        element: <LazyWrapper><Teams /></LazyWrapper>,
      },
      {
        path: "/ethical-review-committee",
        element: <LazyWrapper><EthicalReviewCommittee /></LazyWrapper>,
      },
      {
        path: "/child-abuse-tracker",
        element: <LazyWrapper><ChildAbuseTracker /></LazyWrapper>,
      },
      {
        path: "/covid-19",
        element: <LazyWrapper><Covid19 /></LazyWrapper>,
      },
      {
        path: "/news-and-activities",
        element: <LazyWrapper><NewsAndActivities /></LazyWrapper>,
      },
      {
        path: "/news-and-activities/:slug",
        element: <LazyWrapper><NewsDetail /></LazyWrapper>,
      },
      {
        path: "/partners",
        element: <LazyWrapper><PartnersPage /></LazyWrapper>,
      },
      {
        path: "/privacy-policy",
        element: <LazyWrapper><PrivacyPolicy /></LazyWrapper>,
      },
      {
        path: "*",
        element: <LazyWrapper><UnderConstruction /></LazyWrapper>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
