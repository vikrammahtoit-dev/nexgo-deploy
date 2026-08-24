export const apiTerms ={
      title: "API Terms of Use ",
      effectiveDate: "15 Aug 2026",
      lastUpdated: "15 Aug 2026",

      introduction: [
    {
      type: "paragraph",
      text: "These **API Terms of Use (“API Terms”)** govern your access to and use of APIs, webhooks, SDKs, developer tools, documentation and related technical services provided by **Nexgo** (“Nexgo”, “we”, “us”, “our”).",
    },
    {
      type: "paragraph",
      text: "These API Terms form part of the **Nexgo Terms of Service**. By requesting API access, generating API credentials, integrating with Nexgo APIs, or making API requests, you agree to these API Terms.",
    },
  ],

  sections: [
    {
      id: "what-nexgo-api-provides",
      number: 1,
      title: "What Nexgo API Provides",
      content: [
        {
          type: "paragraph",
          text: "Nexgo APIs may allow approved merchants and technology partners to programmatically access logistics functionality, including:",
        },
        {
          type: "list",
          items: [
            "Create shipments",
            "Cancel shipments",
            "Generate AWBs",
            "Generate shipping labels",
            "Generate manifests",
            "Check shipment status",
            "Track shipments",
            "Fetch courier information",
            "Check pincode serviceability",
            "Calculate shipping rates",
            "Manage NDR",
            "Manage RTO",
            "Create reverse shipments",
            "Access COD information",
            "Retrieve invoices",
            "Access reports",
            "Receive shipment updates through webhooks",
            "Other logistics functionality made available by Nexgo",
          ],
        },
        {
          type: "paragraph",
          text: "The specific API features available to you depend on your account, subscription, integration and applicable Nexgo documentation.",
        },
      ],
    },

    {
      id: "api-access",
      number: 2,
      title: "API Access",
      content: [
        {
          type: "paragraph",
          text: "API access may be provided only after Nexgo approves your account or integration.",
        },
        {
          type: "paragraph",
          text: "Nexgo may provide:",
        },
        {
          type: "list",
          items: [
            "API keys",
            "Client IDs",
            "Client secrets",
            "Access tokens",
            "Webhook credentials",
            "Sandbox credentials",
            "Production credentials",
          ],
        },
        {
          type: "paragraph",
          text: "You must use API credentials only for the account and purpose for which they were issued.",
        },
        {
          type: "paragraph",
          text: "Nexgo may refuse, suspend or revoke API access where necessary for security, compliance, operational or commercial reasons.",
        },
      ],
    },

    {
      id: "developer-account",
      number: 3,
      title: "Developer Account",
      content: [
        {
          type: "paragraph",
          text: "You are responsible for maintaining accurate information associated with your developer or merchant account.",
        },
        {
          type: "paragraph",
          text: "You must promptly update:",
        },
        {
          type: "list",
          items: [
            "Business information",
            "Contact information",
            "Technical contact",
            "Authorized users",
            "Integration information",
            "Other relevant account details",
          ],
        },
        {
          type: "paragraph",
          text: "You must ensure that only authorized personnel have access to your Nexgo API credentials.",
        },
      ],
    },

    {
      id: "api-credentials",
      number: 4,
      title: "API Credentials",
      content: [
        {
          type: "paragraph",
          text: "API credentials are confidential.",
        },
        {
          type: "paragraph",
          text: "You must:",
        },
        {
          type: "list",
          items: [
            "Store credentials securely",
            "Restrict access to authorized personnel",
            "Use appropriate encryption and security controls",
            "Rotate credentials where necessary",
            "Immediately report compromised credentials",
          ],
        },
        {
          type: "paragraph",
          text: "You must not:",
        },
        {
          type: "list",
          items: [
            "Publish API keys publicly",
            "Upload credentials to public GitHub repositories",
            "Include secrets in client-side applications where avoidable",
            "Share credentials with unauthorized third parties",
            "Sell or transfer API credentials",
          ],
        },
        {
          type: "paragraph",
          text: "If you believe your credentials have been compromised, notify Nexgo immediately.",
        },
        {
          type: "paragraph",
          text: "Nexgo may deactivate compromised credentials and issue replacement credentials.",
        },
      ],
    },

    {
      id: "sandbox-and-production",
      number: 5,
      title: "Sandbox and Production",
      content: [
        {
          type: "paragraph",
          text: "Where provided, Nexgo may offer separate:",
        },
        {
          type: "subheading",
          text: "Sandbox Environment",
        },
        {
          type: "paragraph",
          text: "Used for:",
        },
        {
          type: "list",
          items: [
            "Development",
            "Testing",
            "Integration",
            "Debugging",
          ],
        },
        {
          type: "paragraph",
          text: "Sandbox data may not represent actual production performance or availability.",
        },
        {
          type: "subheading",
          text: "Production Environment",
        },
        {
          type: "paragraph",
          text: "Used for live shipments and real customer transactions.",
        },
        {
          type: "paragraph",
          text: "You are responsible for testing your integration before sending production requests.",
        },
      ],
    },

    {
      id: "api-documentation",
      number: 6,
      title: "API Documentation",
      content: [
        {
          type: "paragraph",
          text: "Nexgo may provide technical documentation describing:",
        },
        {
          type: "list",
          items: [
            "Endpoints",
            "Request methods",
            "Parameters",
            "Authentication",
            "Response formats",
            "Error codes",
            "Webhooks",
            "Rate limits",
            "Integration requirements",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may update its documentation from time to time.",
        },
        {
          type: "paragraph",
          text: "You are responsible for using the latest version of the documentation.",
        },
        {
          type: "paragraph",
          text: "**Developer Documentation:** [NEXGO API DOCUMENTATION URL]",
        },
      ],
    },

    {
      id: "permitted-api-usage",
      number: 7,
      title: "Permitted API Usage",
      content: [
        {
          type: "paragraph",
          text: "You may use Nexgo APIs only to:",
        },
        {
          type: "list",
          items: [
            "Integrate your business systems with Nexgo",
            "Automate legitimate shipping operations",
            "Manage your own shipments",
            "Manage shipments for customers you are authorized to represent",
            "Access information available to your account",
            "Perform other activities expressly authorized by Nexgo",
          ],
        },
        {
          type: "paragraph",
          text: "Your API usage must comply with all applicable laws and the Nexgo Terms of Service.",
        },
      ],
    },

    {
      id: "prohibited-api-activities",
      number: 8,
      title: "Prohibited API Activities",
      content: [
        {
          type: "paragraph",
          text: "You must not use Nexgo APIs to:",
        },
        {
          type: "list",
          items: [
            "Gain unauthorized access",
            "Access another user's data",
            "Circumvent security controls",
            "Probe or scan Nexgo systems",
            "Reverse engineer Nexgo APIs",
            "Extract data beyond your authorization",
            "Scrape Nexgo services",
            "Create fake shipments",
            "Manipulate tracking information",
            "Abuse COD services",
            "Circumvent billing",
            "Circumvent rate limits",
            "Perform denial-of-service attacks",
            "Introduce malware",
            "Upload malicious code",
            "Conduct fraudulent activity",
            "Resell API access without authorization",
            "Use the API for unlawful activities",
          ],
        },
      ],
    },

    {
      id: "rate-limits",
      number: 9,
      title: "Rate Limits",
      content: [
        {
          type: "paragraph",
          text: "Nexgo may impose API rate limits to maintain platform stability and security.",
        },
        {
          type: "paragraph",
          text: "Rate limits may apply to:",
        },
        {
          type: "list",
          items: [
            "Requests per second",
            "Requests per minute",
            "Requests per hour",
            "Daily requests",
            "Specific API endpoints",
            "Account-level usage",
          ],
        },
        {
          type: "paragraph",
          text: "Your application must handle rate-limit responses appropriately.",
        },
        {
          type: "paragraph",
          text: "Nexgo may temporarily restrict or suspend API access where excessive traffic threatens platform performance.",
        },
      ],
    },

    {
      id: "fair-usage",
      number: 10,
      title: "Fair Usage",
      content: [
        {
          type: "paragraph",
          text: "API access must be used responsibly.",
        },
        {
          type: "paragraph",
          text: "You must not generate unnecessary requests, including repeated requests that could reasonably be avoided through:",
        },
        {
          type: "list",
          items: [
            "Caching",
            "Webhooks",
            "Pagination",
            "Incremental synchronization",
            "Appropriate retry logic",
          ],
        },
        {
          type: "paragraph",
          text: "Where Nexgo provides webhooks for shipment updates, you should use webhooks instead of repeatedly polling APIs where reasonably possible.",
        },
      ],
    },

    {
      id: "retry-policy",
      number: 11,
      title: "Retry Policy",
      content: [
        {
          type: "paragraph",
          text: "Your application should use reasonable retry mechanisms.",
        },
        {
          type: "paragraph",
          text: "You should avoid repeatedly retrying failed requests without appropriate delays.",
        },
        {
          type: "paragraph",
          text: "For temporary failures, you should use an appropriate *exponential backoff* strategy.",
        },
        {
          type: "paragraph",
          text: "You should not repeatedly retry requests that have received a permanent error response.",
        },
      ],
    },

    {
      id: "idempotency",
      number: 12,
      title: "Idempotency",
      content: [
        {
          type: "paragraph",
          text: "Where Nexgo provides idempotency functionality, you should use idempotency keys for operations where duplicate requests could result in duplicate transactions or shipments.",
        },
        {
          type: "paragraph",
          text: "For example:",
        },
        {
          type: "list",
          items: [
            "Shipment creation",
            "Pickup requests",
            "Reverse shipment creation",
            "Other transaction-based operations",
          ],
        },
        {
          type: "paragraph",
          text: "You are responsible for designing your integration to minimize accidental duplicate operations.",
        },
      ],
    },

    {
      id: "shipment-creation",
      number: 13,
      title: "Shipment Creation",
      content: [
        {
          type: "paragraph",
          text: "When creating a Shipment through the API, you must provide accurate information.",
        },
        {
          type: "paragraph",
          text: "This may include:",
        },
        {
          type: "list",
          items: [
            "Sender information",
            "Receiver information",
            "Address",
            "Pincode",
            "Product details",
            "Product value",
            "Weight",
            "Dimensions",
            "Payment mode",
            "COD amount",
            "Invoice information",
            "Other required fields",
          ],
        },
        {
          type: "paragraph",
          text: "You must not submit false, misleading or fraudulent information.",
        },
      ],
    },

    {
      id: "customer-data",
      number: 14,
      title: "Customer Data",
      content: [
        {
          type: "paragraph",
          text: "Your API integration may process personal information belonging to your customers.",
        },
        {
          type: "paragraph",
          text: "This may include:",
        },
        {
          type: "list",
          items: [
            "Customer name",
            "Phone number",
            "Email address",
            "Delivery address",
            "Order information",
            "Shipment information",
          ],
        },
        {
          type: "paragraph",
          text: "You must have the appropriate legal authority to provide such information to Nexgo.",
        },
        {
          type: "paragraph",
          text: "You must process customer information in accordance with applicable privacy and data-protection laws.",
        },
      ],
    },

    {
      id: "data-security",
      number: 15,
      title: "Data Security",
      content: [
        {
          type: "paragraph",
          text: "You are responsible for maintaining appropriate security measures for information received through Nexgo APIs.",
        },
        {
          type: "paragraph",
          text: "You should:",
        },
        {
          type: "list",
          items: [
            "Encrypt sensitive information where appropriate",
            "Secure API credentials",
            "Restrict employee access",
            "Maintain access logs",
            "Monitor suspicious activity",
            "Use secure HTTPS connections",
            "Remove unnecessary stored data",
            "Protect webhook endpoints",
          ],
        },
        {
          type: "paragraph",
          text: "You must notify Nexgo promptly if you discover a security incident involving Nexgo data or credentials.",
        },
      ],
    },

    {
      id: "webhooks",
      number: 16,
      title: "Webhooks",
      content: [
        {
          type: "paragraph",
          text: "Nexgo may provide webhook notifications for events such as:",
        },
        {
          type: "list",
          items: [
            "Shipment created",
            "Pickup scheduled",
            "Pickup completed",
            "In transit",
            "Out for delivery",
            "Delivered",
            "NDR",
            "RTO",
            "RTO delivered",
            "Shipment cancelled",
            "COD updates",
            "Other shipment events",
          ],
        },
        {
          type: "paragraph",
          text: "Webhook events may be delivered more than once.",
        },
        {
          type: "paragraph",
          text: "Your system should therefore be designed to safely handle duplicate events.",
        },
      ],
    },

    {
      id: "webhook-security",
      number: 17,
      title: "Webhook Security",
      content: [
        {
          type: "paragraph",
          text: "You are responsible for securing your webhook endpoints.",
        },
        {
          type: "paragraph",
          text: "Where Nexgo provides webhook signatures or authentication mechanisms, you should verify them before processing webhook requests.",
        },
        {
          type: "paragraph",
          text: "You should not expose webhook endpoints unnecessarily.",
        },
        {
          type: "paragraph",
          text: "You should also protect your system against:",
        },
        {
          type: "list",
          items: [
            "Replay attacks",
            "Duplicate events",
            "Unauthorized requests",
            "Malformed payloads",
            "Excessive requests",
          ],
        },
      ],
    },

    {
      id: "api-response-data",
      number: 18,
      title: "API Response Data",
      content: [
        {
          type: "paragraph",
          text: "Information returned through the Nexgo API may be confidential or subject to restrictions.",
        },
        {
          type: "paragraph",
          text: "You may use API response data only for legitimate purposes connected with your Nexgo account and authorized integration.",
        },
        {
          type: "paragraph",
          text: "You must not:",
        },
        {
          type: "list",
          items: [
            "Sell Nexgo data",
            "Create unauthorized databases",
            "Publish private shipment information",
            "Share customer information without authorization",
            "Use data for unrelated purposes",
          ],
        },
      ],
    },

    {
      id: "data-retention",
      number: 19,
      title: "Data Retention",
      content: [
        {
          type: "paragraph",
          text: "You should retain API data only for as long as reasonably necessary for your legitimate business purpose or as required by applicable law.",
        },
        {
          type: "paragraph",
          text: "Where customer or personal information is no longer required, you should securely delete or anonymize it where appropriate.",
        },
        {
          type: "paragraph",
          text: "Nexgo may maintain API logs and records for security, operational, accounting, legal and compliance purposes.",
        },
      ],
    },

    {
      id: "third-party-integrations",
      number: 20,
      title: "Third-Party Integrations",
      content: [
        {
          type: "paragraph",
          text: "You may integrate Nexgo with third-party systems such as:",
        },
        {
          type: "list",
          items: [
            "Ecommerce platforms",
            "Marketplaces",
            "ERP systems",
            "OMS systems",
            "WMS systems",
            "CRM systems",
            "Payment systems",
            "Other software",
          ],
        },
        {
          type: "paragraph",
          text: "You are responsible for ensuring that your third-party integrations comply with applicable terms and privacy requirements.",
        },
        {
          type: "paragraph",
          text: "Nexgo is not responsible for failures caused solely by third-party systems.",
        },
      ],
    },

    {
      id: "api-changes",
      number: 21,
      title: "API Changes",
      content: [
        {
          type: "paragraph",
          text: "Nexgo may modify APIs from time to time.",
        },
        {
          type: "paragraph",
          text: "Changes may include:",
        },
        {
          type: "list",
          items: [
            "New endpoints",
            "New fields",
            "New features",
            "Bug fixes",
            "Security improvements",
            "Performance improvements",
            "Deprecated endpoints",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may provide notice for material breaking changes where reasonably practicable.",
        },
        {
          type: "paragraph",
          text: "You are responsible for maintaining your integration.",
        },
      ],
    },

    {
      id: "api-versioning",
      number: 22,
      title: "API Versioning",
      content: [
        {
          type: "paragraph",
          text: "Nexgo may provide versioned APIs.",
        },
        {
          type: "paragraph",
          text: "For example:",
        },
        {
          type: "list",
          items: [
            "**v1**",
            "**v2**",
            "**v3**",
          ],
        },
        {
          type: "paragraph",
          text: "You should use the version specified in Nexgo's current API documentation.",
        },
        {
          type: "paragraph",
          text: "Nexgo may eventually deprecate older API versions.",
        },
        {
          type: "paragraph",
          text: "Where applicable, Nexgo may provide a migration period before discontinuing an older version.",
        },
      ],
    },

    {
      id: "api-availability",
      number: 23,
      title: "API Availability",
      content: [
        {
          type: "paragraph",
          text: "Nexgo aims to maintain reliable API availability but does not guarantee that APIs will always be:",
        },
        {
          type: "list",
          items: [
            "Available",
            "Uninterrupted",
            "Error-free",
            "Free from latency",
            "Free from maintenance periods",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may temporarily restrict API availability for:",
        },
        {
          type: "list",
          items: [
            "Maintenance",
            "Security",
            "Upgrades",
            "Emergency situations",
            "Infrastructure changes",
            "Regulatory requirements",
          ],
        },
      ],
    },

    {
      id: "api-errors",
      number: 24,
      title: "API Errors",
      content: [
        {
          type: "paragraph",
          text: "API responses may include errors caused by:",
        },
        {
          type: "list",
          items: [
            "Invalid authentication",
            "Invalid parameters",
            "Missing information",
            "Unauthorized access",
            "Rate limits",
            "Service unavailability",
            "Shipment status restrictions",
            "Courier Partner errors",
            "Other technical or operational conditions",
          ],
        },
        {
          type: "paragraph",
          text: "Your application must handle API errors appropriately.",
        },
      ],
    },

    {
      id: "courier-partner-data",
      number: 25,
      title: "Courier Partner Data",
      content: [
        {
          type: "paragraph",
          text: "Some API responses may contain information received from third-party Courier Partners.",
        },
        {
          type: "paragraph",
          text: "Such information may:",
        },
        {
          type: "list",
          items: [
            "Change over time",
            "Be delayed",
            "Be incomplete",
            "Be subject to Courier Partner systems",
            "Be unavailable temporarily",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo does not guarantee that all third-party information will always be accurate or available in real time.",
        },
      ],
    },

    {
      id: "api-charges",
      number: 26,
      title: "API Charges",
      content: [
        {
          type: "paragraph",
          text: "Nexgo may charge fees for certain API usage or services.",
        },
        {
          type: "paragraph",
          text: "Applicable charges may include:",
        },
        {
          type: "list",
          items: [
            "API subscription fees",
            "Transaction fees",
            "Shipment charges",
            "Premium API charges",
            "Excess usage charges",
            "Other applicable fees",
          ],
        },
        {
          type: "paragraph",
          text: "Any applicable pricing will be communicated through the relevant commercial plan, rate card or agreement.",
        },
      ],
    },

    {
      id: "no-circumvention",
      number: 27,
      title: "No Circumvention",
      content: [
        {
          type: "paragraph",
          text: "You must not use APIs or technical methods to circumvent:",
        },
        {
          type: "list",
          items: [
            "Shipping charges",
            "Account restrictions",
            "Rate limits",
            "Courier restrictions",
            "Subscription limits",
            "Security controls",
            "Usage limits",
            "Other Nexgo controls",
          ],
        },
        {
          type: "paragraph",
          text: "Attempts to circumvent such controls may result in immediate suspension.",
        },
      ],
    },

    {
      id: "security-testing",
      number: 28,
      title: "Security Testing",
      content: [
        {
          type: "paragraph",
          text: "You must not conduct penetration testing, vulnerability scanning, load testing or other security testing against Nexgo APIs without prior written authorization.",
        },
        {
          type: "paragraph",
          text: "If you identify a security vulnerability, report it to:",
        },
        {
          type: "paragraph",
          text: "**Security Email:** [SECURITY@NEXGO DOMAIN]",
        },
        {
          type: "paragraph",
          text: "Please do not publicly disclose the vulnerability before Nexgo has had a reasonable opportunity to investigate and address it.",
        },
      ],
    },

    {
      id: "intellectual-property",
      number: 29,
      title: "Intellectual Property",
      content: [
        {
          type: "paragraph",
          text: "Nexgo retains all rights in:",
        },
        {
          type: "list",
          items: [
            "APIs",
            "API architecture",
            "Documentation",
            "SDKs",
            "Software",
            "Endpoints",
            "Data structures",
            "Nexgo trademarks",
            "Nexgo branding",
          ],
        },
        {
          type: "paragraph",
          text: "Your use of the API does not transfer ownership of Nexgo intellectual property to you.",
        },
      ],
    },

    {
      id: "sdks-and-developer-tools",
      number: 30,
      title: "SDKs and Developer Tools",
      content: [
        {
          type: "paragraph",
          text: "Where Nexgo provides SDKs, libraries or developer tools, they are provided for authorized integration purposes.",
        },
        {
          type: "paragraph",
          text: "You must not:",
        },
        {
          type: "list",
          items: [
            "Modify them to bypass security",
            "Remove license notices",
            "Redistribute proprietary components without permission",
            "Use them for unlawful purposes",
          ],
        },
      ],
    },

    {
      id: "branding",
      number: 31,
      title: "Branding",
      content: [
        {
          type: "paragraph",
          text: "You may not represent your application or service as being owned, operated or officially endorsed by Nexgo unless Nexgo has provided written authorization.",
        },
        {
          type: "paragraph",
          text: "Use of the Nexgo name, logo or trademarks must comply with Nexgo's brand guidelines.",
        },
      ],
    },

    {
      id: "api-suspension",
      number: 32,
      title: "API Suspension",
      content: [
        {
          type: "paragraph",
          text: "Nexgo may suspend API access if:",
        },
        {
          type: "list",
          items: [
            "Credentials are compromised",
            "Unusual traffic is detected",
            "Rate limits are repeatedly violated",
            "Security risks are identified",
            "Fraud is suspected",
            "The account violates these Terms",
            "Payments remain overdue",
            "Required KYC is incomplete",
            "The API is used unlawfully",
            "Suspension is required for security or compliance",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may restore access after the relevant issue has been resolved.",
        },
      ],
    },

    {
      id: "api-termination",
      number: 33,
      title: "API Termination",
      content: [
        {
          type: "paragraph",
          text: "Nexgo may terminate API access or discontinue an API where reasonably necessary.",
        },
        {
          type: "paragraph",
          text: "Upon termination, you must:",
        },
        {
          type: "list",
          items: [
            "Stop making API requests",
            "Stop using Nexgo credentials",
            "Remove credentials from your systems",
            "Stop representing the integration as active",
            "Handle stored data according to applicable requirements",
          ],
        },
        {
          type: "paragraph",
          text: "Termination does not remove outstanding financial or legal obligations.",
        },
      ],
    },

    {
      id: "indemnification",
      number: 34,
      title: "Indemnification",
      content: [
        {
          type: "paragraph",
          text: "You agree to indemnify and hold harmless Nexgo, its affiliates, officers, employees, agents and service providers against claims, losses, damages, liabilities and expenses arising from:",
        },
        {
          type: "list",
          items: [
            "Your API usage",
            "Your violation of these API Terms",
            "Unauthorized access caused by your security failure",
            "Misuse of customer information",
            "Fraudulent API activity",
            "Violation of applicable law",
            "Your application or integration",
            "Intellectual property infringement",
            "Unauthorized use of Nexgo data",
          ],
        },
      ],
    },

    {
      id: "limitation-of-liability",
      number: 35,
      title: "Limitation of Liability",
      content: [
        {
          type: "paragraph",
          text: "To the maximum extent permitted by applicable law, Nexgo shall not be liable for indirect, incidental, special, consequential or punitive damages arising from API use.",
        },
        {
          type: "paragraph",
          text: "Nexgo shall not be responsible for losses caused solely by:",
        },
        {
          type: "list",
          items: [
            "Your application",
            "Your infrastructure",
            "Third-party integrations",
            "Internet connectivity",
            "Courier Partner systems",
            "Incorrect API implementation",
            "Failure to securely store credentials",
          ],
        },
        {
          type: "paragraph",
          text: "Nothing in these API Terms excludes liability that cannot legally be excluded.",
        },
      ],
    },

    {
      id: "confidentiality",
      number: 36,
      title: "Confidentiality",
      content: [
        {
          type: "paragraph",
          text: "Information exchanged through the Nexgo API that is confidential or reasonably understood to be confidential must be protected from unauthorized disclosure.",
        },
        {
          type: "paragraph",
          text: "You must not disclose confidential Nexgo technical information except to authorized personnel who need it for the integration.",
        },
      ],
    },

    {
      id: "compliance-with-laws",
      number: 37,
      title: "Compliance With Laws",
      content: [
        {
          type: "paragraph",
          text: "You must use Nexgo APIs in compliance with all applicable laws and regulations, including those relating to:",
        },
        {
          type: "list",
          items: [
            "Data protection",
            "Privacy",
            "Cybersecurity",
            "Consumer protection",
            "Taxation",
            "Logistics",
            "E-commerce",
            "Telecommunications",
            "Fraud prevention",
          ],
        },
        {
          type: "paragraph",
          text: "You are responsible for determining which laws apply to your business.",
        },
      ],
    },

    {
      id: "changes-to-api-terms",
      number: 38,
      title: "Changes to API Terms",
      content: [
        {
          type: "paragraph",
          text: "Nexgo may update these API Terms from time to time.",
        },
        {
          type: "paragraph",
          text: "The latest version will be published on the Nexgo website or developer portal.",
        },
        {
          type: "paragraph",
          text: "Where required, Nexgo may provide notice of material changes.",
        },
        {
          type: "paragraph",
          text: "Continued API usage after the effective date of updated Terms constitutes acceptance of the revised Terms, to the extent permitted by law.",
        },
      ],
    },

    {
      id: "governing-law",
      number: 39,
      title: "Governing Law",
      content: [
        {
          type: "paragraph",
          text: "These API Terms shall be governed by the laws of India.",
        },
        {
          type: "paragraph",
          text: "Subject to applicable law, courts located in:",
        },
        {
          type: "paragraph",
          text: "*[CITY, STATE, INDIA]*",
        },
        {
          type: "paragraph",
          text: "shall have jurisdiction.",
        },
      ],
    },

    {
      id: "dispute-resolution",
      number: 40,
      title: "Dispute Resolution",
      content: [
        {
          type: "paragraph",
          text: "The parties will first attempt to resolve disputes through good-faith discussions.",
        },
        {
          type: "paragraph",
          text: "If the dispute cannot be resolved amicably, it may be referred to arbitration in accordance with applicable Indian law.",
        },
        {
          type: "paragraph",
          text: "**Seat of Arbitration:** [CITY, INDIA]",
        },
        {
          type: "paragraph",
          text: "**Language:** English",
        },
        {
          type: "paragraph",
          text: "**Number of Arbitrators:** One",
        },
      ],
    },

    {
      id: "relationship-with-other-nexgo-policies",
      number: 41,
      title: "Relationship With Other Nexgo Policies",
      content: [
        {
          type: "paragraph",
          text: "These API Terms should be read together with:",
        },
        {
          type: "list",
          items: [
            "Nexgo Terms of Service",
            "Nexgo Privacy Policy",
            "Nexgo Cookie Policy",
            "Nexgo Merchant Agreement",
            "Nexgo Prohibited Items Policy",
            "Nexgo Claims Policy",
            "Nexgo Shipping & Packaging SOP",
            "Nexgo API Documentation",
            "Applicable pricing/rate card",
          ],
        },
        {
          type: "paragraph",
          text: "If there is a conflict, the specific agreement or API documentation applicable to the relevant service may prevail to the extent stated therein.",
        },
      ],
    },

    {
      id: "acceptance",
      number: 42,
      title: "Acceptance",
      content: [
        {
          type: "paragraph",
          text: "By requesting API access, generating API credentials, connecting your application to Nexgo, or making API requests, you acknowledge that you have read, understood and accepted these *API Terms of Use*.",
        },
        {
          type: "paragraph",
          text: "**NEXGO**",
        },
        {
          type: "paragraph",
          text: "**Ship Smart. Deliver Better.**",
        },
      ],
    },
  ],

  developerPortal: {
    title: "Recommended Nexgo Developer Portal",

    content: [
      {
        type: "subheading",
        text: "NEXGO DEVELOPER PORTAL",
      },
      {
        type: "subheading",
        text: "Build with Nexgo",
      },
      {
        type: "paragraph",
        text: "Connect your store, ERP or application to India's logistics network.",
      },
      {
        type: "actions",
        items: [
          "Get API Key",
          "View Documentation",
        ],
      },
      {
        type: "subheading",
        text: "API",
      },
      {
        type: "list",
        items: [
          "Getting Started",
          "Authentication",
          "Create Shipment",
          "Cancel Shipment",
          "Track Shipment",
          "Rate Calculator",
          "Pincode Serviceability",
          "AWB & Labels",
          "NDR",
          "RTO",
          "COD",
          "Reverse Pickup",
          "Webhooks",
          "Error Codes",
          "API Changelog",
        ],
      },
      {
        type: "subheading",
        text: "DEVELOPERS",
      },
      {
        type: "list",
        items: [
          "API Terms of Use",
          "Security",
          "SDKs",
          "Support",
        ],
      },
      {
        type: "paragraph",
        text: "For Nexgo, I would also create a separate *API Documentation page* with actual endpoint examples, authentication, request/response JSON, error codes, webhook events, rate limits and sandbox credentials.",
      },
      {
        type: "paragraph",
        text: "The *API Terms of Use should remain the legal page*, while the documentation explains *how to actually use the API*.",
      },
    ],
  },

}