import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="container-custom py-32 pt-40 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="title-hero mb-12">Terms of Service</h1>
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
            Welcome to Ruah Verse. By using our website and services, you agree to these Terms of Service.
          </p>

          <h2 className="text-2xl font-black text-slate-900">1. Services</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Ruah Verse provides custom web development and digital design services to clients by agreement.</li>
            <li>A formal project agreement, proposal, or contract may be required for each project.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">2. Client Responsibilities</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>You agree to provide accurate requirements, project content, and timely feedback.</li>
            <li>You retain rights to your business materials, and grant us necessary permissions to use them for project delivery.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">3. Payment & Terms</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Payment terms (amount, due dates, method) will be defined in your project agreement.</li>
            <li>Late payments may result in project delays or suspension.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">4. Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Upon final payment, you own the deliverables created specifically for your project, unless otherwise stated.</li>
            <li>We reserve the right to display completed projects in our portfolio (with your permission).</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">5. Limitation of Liability</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Ruah Verse is not liable for indirect or consequential losses resulting from the use of our services or website.</li>
            <li>All services are provided “as-is”. We do not guarantee uninterrupted or error-free operation of delivered websites.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">6. Termination</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Either party may terminate the agreement for cause (e.g., non-payment or breach). Terms for project cancellation will be specified in your contract.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900">7. Changes to the Terms</h2>
          <p>
            We may update these Terms; continued use constitutes acceptance.
          </p>

          <h2 className="text-2xl font-black text-slate-900">Contact</h2>
          <p>
            For questions regarding these Terms or your project, contact us at contactruahverse@gmail.com.
          </p>
          <p className="text-sm text-slate-400 font-black tracking-widest uppercase py-8 border-t border-slate-100">Effective Date: 30 January 2026</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
