import {
  FaFacebookF,
  FaGoogle,
  FaRegCopy,
  FaFacebook,
  FaProductHunt,
} from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { IoIosPeople, IoLogoFacebook } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import {
  IoChatbubblesOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { AiOutlineWindows } from "react-icons/ai";

const PricesCard = () => {
  return (
    <div className="grid grid-cols-3 gap-6 bg-[#C5C0EB] p-20">
      {/* Personal Plans */}
      <div className="p-10 bg-white">
        <h3 className="text-3xl font-semibold bg-slate-600 text-white p-5">
          Personal Plan
        </h3>
        <div>
          <p>
            <FaFacebookF /> Facebook Ads Setup
          </p>
          <hr />
          <p>
            <FaGoogle /> Google Ads Setup
          </p>
          <hr />
          <p>
            <FaVideo /> Video Editing
          </p>
          <hr />
          <p>
            <IoIosPeople /> Audience Research
          </p>
          <hr />
          <p>
            <TiArrowBack /> Performance Snapshot Report
          </p>
          <hr />
          <p>
            <IoChatbubblesOutline /> 24/7 Customer Support
          </p>
        </div>
        <button className="bg-green-600 text-white p-3 w-1/2 mx-auto border-0 rounded-3xl my-7">
          Get Started >
        </button>
      </div>
      {/* Populer Plan */}
      <div className="p-10 bg-white">
        <h3 className="text-3xl font-semibold bg-slate-600 text-white p-5">
          Personal Plan
        </h3>
        <div>
          <p>
            <FaFacebookF /> Advanced Facebook Ad Campaigns (Retargeting, Custom
            Audiences)
          </p>
          <hr />
          <p>
            <FaGoogle /> Google Ads Advanced Management and Optimization
          </p>
          <hr />
          <p>
            <IoLogoFacebook /> Facebook Server-side Pixel Setup
          </p>
          <hr />
          <p>
            <FaGoogle /> Google ads Conversion tracking
          </p>
          <hr />
          <p>
            <FaRegCopy /> AdCopy Writing
          </p>
          <hr />
          <p>
            <FaVideo /> Video Editing
          </p>
          <hr />
          <p>
            <AiOutlineWindows /> Graphic Design
          </p>
          <hr />
          <p>
            <IoChatbubblesOutline /> 24/7 Customer Support
          </p>
        </div>
        <button className="bg-green-600 text-white p-3 w-1/2 mx-auto border-0 rounded-3xl my-7">
          Get Started >
        </button>
      </div>
      {/* Business Plan */}
      <div className="p-10 bg-white">
        <h3 className="text-3xl font-semibold bg-slate-600 text-white p-5">
          Business Plan
        </h3>
        <div>
          <p>
            <FaFacebook /> Full-scale Facebook and Instagram Ad Campaign
          </p>
          <hr />
          <p>
            <FaFacebookF /> Facebook Server-side Pixel Setup with cookies life
            extend
          </p>
          <hr />
          <p>
            <FaGoogle /> Google Ads Strategies with Advanced Targeting, A/B
            Testing
          </p>
          <hr />
          <p>
            <FaGoogle /> Google ads Conversion tracking with server side
          </p>
          <hr />
          <p>
            <IoCheckmarkCircleOutline /> In-depth Monthly Custom Reports with
            Actionable Insights
          </p>
          <hr />
          <p>
            <FaRegCopy /> AdCopy Writing
          </p>
          <hr />
          <p>
            <FaVideo /> Video Editing
          </p>
          <hr />
          <p>
            <FaProductHunt /> Products Post Design
          </p>
          <hr />
          <p>
            <IoChatbubblesOutline /> 24/7 Customer Support
          </p>
        </div>
        <button className="bg-green-600 text-white p-3 w-1/2 mx-auto border-0 rounded-3xl my-7">
          Get Started >
        </button>
      </div>
    </div>
  );
};

export default PricesCard;
