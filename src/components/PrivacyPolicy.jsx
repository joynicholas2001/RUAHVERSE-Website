import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        "Ruah Verse" (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal identification information (name, email address, phone number, etc.) provided via contact forms or during project onboarding.</li>
        <li>Technical data such as IP address, browser type, pages visited, and usage patterns, collected via analytics tools.</li>
        <li>Client project information and content necessary for providing web development services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To communicate with you about our services and respond to your inquiries.</li>
        <li>To deliver and improve our web development solutions.</li>
        <li>For business administration, record-keeping, and complying with legal obligations.</li>
      </ul>
      <p className="mb-4">We do not sell your personal information.</p>

      <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
      <ul className="list-disc list-inside mb-4">
        <li>We may share your data with service providers (such as hosting or analytics partners) strictly as needed for service delivery.</li>
        <li>We may disclose information if required by law, or to protect our rights and the security of our company and clients.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
      <ul className="list-disc list-inside mb-4">
        <li>We use reasonable safeguards to protect your information, but no security measure is absolute.</li>
        <li>In the event of a data breach, we will notify affected parties as required by law.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You can request to view, correct, or delete your personal data held by Ruah Verse.</li>
        <li>Contact us at [your email here] for privacy concerns or data requests.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">6. Changes to this Policy</h2>
      <p className="mb-4">
        We may update this policy as needed. Changes will be posted on our website with an updated effective date.
      </p>
      <p className="text-sm text-gray-500">Date: 28 Oct 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
