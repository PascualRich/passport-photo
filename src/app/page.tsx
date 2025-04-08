import DocumentsSection from "@/components/documents-section";
import FeedbackSection from "@/components/feedback-section";
import HeroBanner from "@/components/hero-banner";
import MediaPartners from "@/components/media-partners";
import PassportPhotoServiceOverview from "@/components/passport-photo-service-overview";
import PassportPhotoMakerExplanation from "@/components/passport-photo-steps-explanation";

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-screen flex-col items-center justify-center">
      <HeroBanner />
      <MediaPartners />
      <PassportPhotoMakerExplanation />
      <PassportPhotoServiceOverview />
      <DocumentsSection />
      <FeedbackSection />
    </div>
  );
}
