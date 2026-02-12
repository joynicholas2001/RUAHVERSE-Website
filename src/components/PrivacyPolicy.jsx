import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="container-custom py-32 pt-40 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="title-hero mb-12">Privacy Policy</h1>
        <div className="mb-12">
          <button
            onClick={() => navigate('/')}
            className="btn-secondary"
          >
            ← Back to Home
          </button>
        </div>
        <div className="space-y-8 text-slate-600 font-medium">
          <p>
            "Ruah Verse" (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
          </p>

          <h2 className="text-2xl font-black text-slate-900">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Personal identification information (name, email address, phone number, etc.) provided via contact forms or during project onboarding.</li>
            <li>Technical data such as IP address, browser type, pages visited, and usage patterns, collected via analytics tools.</li>
            <li>Client project information and content necessary for providing web development services.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">2. How We Use Information</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>To communicate with you about our services and respond to your inquiries.</li>
            <li>To deliver and improve our web development solutions.</li>
            <li>For business administration, record-keeping, and complying with legal obligations.</li>
          </ul>
          <p className="bg-slate-100 p-6 rounded-2xl border-l-4 border-violet-600">We do not sell your personal information.</p>

          <h2 className="text-2xl font-black text-slate-900">3. Information Sharing</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>We may share your data with service providers (such as hosting or analytics partners) strictly as needed for service delivery.</li>
            <li>We may disclose information if required by law, or to protect our rights and the security of our company and clients.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">4. Data Security</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>We use reasonable safeguards to protect your information, but no security measure is absolute.</li>
            <li>In the event of a data breach, we will notify affected parties as required by law.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">5. Your Rights</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>You can request to view, correct, or delete your personal data held by Ruah Verse.</li>
            <li>Contact us at contactruahverse@gmail.com for privacy concerns or data requests.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">6. Changes to this Policy</h2>
          <p>
            We may update this policy as needed. Changes will be posted on our website with an updated effective date.
          </p>
          <p className="text-sm text-slate-400 font-black tracking-widest uppercase py-8 border-t border-slate-100">Revision Date: 30 January 2026</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
