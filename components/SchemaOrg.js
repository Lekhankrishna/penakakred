export default function SchemaOrg() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PenakaKred Private Limited",
    "url": "https://www.penakakred.example",
    "logo": "https://www.penakakred.example/logo.png"
  };
  const local = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "PenakaKred Private Limited",
    "address": {
      "@type":"PostalAddress",
      "streetAddress":"Vinayaka Layout, Nagdevanahalli",
      "addressLocality":"Bengaluru",
      "addressRegion":"Karnataka"
    },
    "telephone":"+917396667670",
    "openingHours":"Mo-Sa 08:00-19:00"
  };
  const faq = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Is PenakaKred compliant with RBI guidelines?","acceptedAnswer":{"@type":"Answer","text":"Yes. We follow RBI instructions on fair practices, privacy, and grievance redressal, with audited SOPs and QA monitoring."}},
      {"@type":"Question","name":"Do you provide legal recovery services?","acceptedAnswer":{"@type":"Answer","text":"We assist with Sec.138 notices, arbitration documentation, and DRT/SARFAESI coordination via empaneled counsel."}},
      {"@type":"Question","name":"How do you contact borrowers?","acceptedAnswer":{"@type":"Answer","text":"Omnichannel: WhatsApp, IVR/voice, SMS, email, and field visits—using consent-based, empathetic scripts."}}
    ]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(org)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(local)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faq)}} />
    </>
  );
}
