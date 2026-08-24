// ShippingSOP.data.js

export const shippingSOPData = {
  title: "Nexgo Shipping SOP",

  effectiveDate: "14 August 2026",
  lastUpdatedDate: "14 August 2026",

  introduction: {
    paragraphs: [
      "**Nexgo** is a technology-driven courier aggregation platform that enables businesses, D2C brands, marketplace sellers and online merchants to ship parcels through multiple courier partners from a single platform.",

      "This Shipping SOP defines the operational guidelines, documentation requirements, packaging standards, shipment handling procedures, claims process and service conditions applicable to shipments booked through Nexgo.",
    ],

    important: {
      title: "Important",
      text: "Courier-specific charges, serviceability, claim limits and TAT may vary depending on the selected carrier, shipment category, destination and applicable commercial agreement.",
    },
  },

  sections: [
    {
      id: "kyc-account-verification",
      number: 1,
      title: "KYC & ACCOUNT VERIFICATION",

      content: [
        {
          type: "paragraph",
          text: "KYC (Know Your Customer) verification is mandatory before certain Nexgo services, including COD and other services where verification is required.",
        },
        {
          type: "paragraph",
          text: "Nexgo may verify the identity, business details and banking information of every merchant before activating or continuing shipping services.",
        },
        {
          type: "subheading",
          text: "Types of Accounts",
        },
        {
          type: "list",
          items: [
            "Individual / Sole Seller",
            "Proprietorship",
            "Partnership / LLP",
            "Private Limited / Public Limited Company",
            "Other eligible registered businesses",
          ],
        },
        {
          type: "subheading",
          text: "Individual Seller – Required Documents",
        },
        {
          type: "list",
          items: [
            "PAN Card",
            "Government-issued identity proof",
            "Cancelled cheque / bank statement / passbook",
            "Address proof, where required",
          ],
        },
        {
          type: "subheading",
          text: "Proprietorship – Required Documents",
        },
        {
          type: "list",
          items: [
            "GST Certificate, where applicable",
            "PAN Card",
            "Proprietor's identity proof",
            "Cancelled cheque / bank statement",
            "Business address proof, where required",
          ],
        },
        {
          type: "subheading",
          text: "Partnership / LLP – Required Documents",
        },
        {
          type: "list",
          items: [
            "GST Certificate, where applicable",
            "PAN",
            "Partnership Deed / LLP Incorporation documents",
            "Identity documents of authorized partner/director",
            "Cancelled cheque",
            "Business address proof",
          ],
        },
        {
          type: "subheading",
          text: "Company – Required Documents",
        },
        {
          type: "list",
          items: [
            "Certificate of Incorporation",
            "GST Certificate, where applicable",
            "Company PAN",
            "Identity documents of authorized directors",
            "Cancelled cheque / bank proof",
            "Other documents requested during verification",
          ],
        },
        {
          type: "subheading",
          text: "KYC Conditions",
        },
        {
          type: "list",
          items: [
            "Information submitted on the Nexgo panel should match the supporting documents.",
            "Nexgo may request additional documents for verification.",
            "Incomplete, invalid, expired or mismatched documents may result in account/service restrictions.",
            "COD remittance may be withheld until KYC and banking details are successfully verified.",
            "Nexgo may suspend an account where fraudulent, suspicious or prohibited activity is identified.",
          ],
        },
      ],
    },

    {
      id: "shipping-process",
      number: 2,
      title: "SHIPPING PROCESS",

      content: [
        {
          type: "paragraph",
          text: "The standard Nexgo shipping workflow is:",
        },

        {
          type: "step",
          number: 1,
          title: "Create Shipment",
          description:
            "The merchant can create a shipment manually, through bulk upload or through an integrated sales channel/API.",
          items: [
            "Consignor details",
            "Consignee name",
            "Complete delivery address",
            "Mobile number",
            "Pin code",
            "Product description",
            "Product value",
            "Dead weight",
            "Length",
            "Breadth",
            "Height",
            "Payment mode",
            "COD amount, where applicable",
            "Invoice details",
          ],
        },

        {
          type: "step",
          number: 2,
          title: "Select Courier",
          description:
            "Nexgo may display available courier partners based on:",
          items: [
            "Destination serviceability",
            "Shipment weight",
            "Shipment dimensions",
            "Delivery zone",
            "COD availability",
            "Pickup availability",
            "Courier performance",
            "Merchant preferences",
            "Applicable commercial rates",
          ],
        },

        {
          type: "step",
          number: 3,
          title: "Generate AWB & Label",
          description:
            "After courier selection, an AWB/shipment number and shipping label may be generated.",
          items: [
            "The correct label is attached to the correct package.",
            "AWB information is clearly visible.",
            "The package contains the correct product and invoice.",
            "Old shipping labels are removed or completely covered.",
          ],
        },

        {
          type: "step",
          number: 4,
          title: "Pickup",
          description:
            "The package is handed over to the assigned courier partner at the registered pickup location.",
        },

        {
          type: "step",
          number: 5,
          title: "Transit & Delivery",
          description:
            "The shipment moves through the courier network and is delivered to the consignee according to the applicable service level.",
        },

        {
          type: "step",
          number: 6,
          title: "COD Remittance",
          description:
            "For COD shipments, the courier collects the amount from the consignee and the eligible amount is subsequently remitted to the merchant according to Nexgo's applicable COD settlement cycle.",
        },
      ],
    },

    {
      id: "first-mile-pickup-sop",
      number: 3,
      title: "FIRST-MILE / PICKUP SOP",

      content: [
        {
          type: "paragraph",
          text: "The following guidelines apply to pickup requests:",
        },
        {
          type: "list",
          items: [
            "Pickup requests should be created with accurate pickup details.",
            "Packages must be packed and ready before the scheduled pickup.",
            "The merchant should provide the shipment label and required documents.",
            "If a pickup is not attempted within the applicable pickup TAT, the merchant may raise a support request.",
            "Pickup escalation timelines may vary according to the courier partner.",
            "Repeated pickup failures may require courier reallocation or a fresh pickup request.",
            "Pickup availability is subject to courier serviceability and manpower.",
            "Pickup from restricted locations, upper floors or special premises may be subject to courier-specific conditions or additional charges.",
          ],
        },
      ],
    },

    {
      id: "delivery-sop",
      number: 4,
      title: "DELIVERY SOP",

      content: [
        {
          type: "paragraph",
          text: "Delivery is performed by the selected courier partner according to its operational network and service conditions.",
        },
        {
          type: "subheading",
          text: "Delivery Attempt",
        },
        {
          type: "paragraph",
          text: "The courier partner may make multiple delivery attempts depending on its operational policy.",
        },
        {
          type: "paragraph",
          text: "A shipment may be marked as:",
        },
        {
          type: "list",
          items: [
            "Delivered",
            "Customer Not Available",
            "Customer Refused",
            "Address Incorrect",
            "Address Incomplete",
            "Customer Requested Reschedule",
            "Delivery Area Not Serviceable",
            "COD Amount Not Available",
            "Other applicable delivery exception",
          ],
        },
        {
          type: "paragraph",
          text: "Additional delivery attempts, where applicable, may attract additional charges according to the courier partner's tariff.",
        },
      ],
    },

    {
      id: "rto-return-to-origin",
      number: 5,
      title: "RTO – RETURN TO ORIGIN",

      content: [
        {
          type: "paragraph",
          text: "A shipment may move to RTO when delivery cannot be completed.",
        },
        {
          type: "paragraph",
          text: "Possible reasons include:",
        },
        {
          type: "list",
          items: [
            "Customer refusal",
            "Incorrect address",
            "Incomplete address",
            "Customer unavailable",
            "Customer unreachable",
            "Multiple unsuccessful delivery attempts",
            "COD refusal",
            "Pincode/serviceability issue",
            "Other courier-defined exceptions",
          ],
        },
        {
          type: "paragraph",
          text: "RTO charges may apply according to the applicable courier partner and merchant rate card.",
        },
        {
          type: "paragraph",
          text: "The merchant is responsible for providing accurate consignee information to reduce avoidable RTO.",
        },
      ],
    },

    {
      id: "e-way-bill-shipping-documents",
      number: 6,
      title: "E-WAY BILL & SHIPPING DOCUMENTS",

      content: [
        {
          type: "paragraph",
          text: "Merchants are responsible for complying with applicable GST, e-way bill, invoice and transportation requirements.",
        },
        {
          type: "paragraph",
          text: "Where an e-way bill is legally required, the merchant must generate and provide a valid e-way bill before movement of the shipment.",
        },
        {
          type: "paragraph",
          text: "The merchant must ensure:",
        },
        {
          type: "list",
          items: [
            "Invoice details are accurate.",
            "Product description is correct.",
            "Declared value is genuine.",
            "GST information is accurate.",
            "E-way bill details match the shipment.",
            "Required documents are available during transit.",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may restrict or hold shipments where mandatory documentation is missing or appears incorrect.",
        },
        {
          type: "paragraph",
          text: "For current statutory requirements, merchants should refer to the applicable government regulations and the official e-way bill system.",
        },
      ],
    },

    {
      id: "packaging-sop",
      number: 7,
      title: "PACKAGING SOP",

      content: [
        {
          type: "paragraph",
          text: "The merchant is responsible for ensuring that every shipment is properly packed before handover to the courier.",
        },
        {
          type: "paragraph",
          text: "Packaging must be suitable for:",
        },
        {
          type: "list",
          items: [
            "Product weight",
            "Product dimensions",
            "Product fragility",
            "Transportation conditions",
            "Handling requirements",
            "Weather exposure",
            "Stacking and movement during transit",
          ],
        },

        {
          type: "subheading",
          text: "General Packaging Requirements",
        },
        {
          type: "paragraph",
          text: "Before dispatch:",
        },
        {
          type: "list",
          items: [
            "Inspect the outer package for damage.",
            "Do not use weak, wet or previously damaged boxes.",
            "Select an appropriately sized box.",
            "Minimise empty space inside the package.",
            "Use suitable cushioning material.",
            "Seal all openings securely.",
            "Ensure the shipping label is clearly visible.",
          ],
        },

        {
          type: "subheading",
          text: "Recommended Corrugated Packaging",
        },

        {
          type: "table",
          headers: ["Shipment Type", "Recommended Packaging"],
          rows: [
            [
              "Lightweight / non-fragile",
              "Suitable 3-ply corrugated box",
            ],
            [
              "Heavy / fragile",
              "Suitable 5-ply or stronger box",
            ],
            [
              "Very heavy shipments",
              "Strong multi-ply / specialised packaging",
            ],
            [
              "High-value products",
              "Tamper-evident / additional protective packaging",
            ],
            [
              "Machinery / equipment",
              "Reinforced packaging or wooden protection where appropriate",
            ],
          ],
        },

        {
          type: "paragraph",
          text: "These are general recommendations. The actual packaging strength should be selected according to the product and carrier requirements.",
        },
      ],
    },

    {
      id: "liquid-product-packaging",
      number: 8,
      title: "LIQUID PRODUCT PACKAGING",

      content: [
        {
          type: "paragraph",
          text: "Liquid shipments require additional protection against leakage.",
        },
        {
          type: "paragraph",
          text: "Recommended procedure:",
        },
        {
          type: "numberedList",
          items: [
            "Secure the bottle/container cap.",
            "Use leak-proof sealing where appropriate.",
            "Place the product inside a sealed plastic/zip-lock pouch.",
            "Add sufficient absorbent/cushioning material.",
            "Place the product inside a suitable secondary box.",
            "Fill empty space to prevent movement.",
            "Seal the outer package securely.",
            "Apply appropriate handling labels.",
          ],
        },
        {
          type: "paragraph",
          text: "The merchant remains responsible for ensuring the package is leak-proof before handover.",
        },
      ],
    },

    {
      id: "fragile-shipments",
      number: 9,
      title: "FRAGILE SHIPMENTS",

      content: [
        {
          type: "paragraph",
          text: "Fragile products must be packed with adequate internal cushioning.",
        },
        {
          type: "paragraph",
          text: "Recommended materials include:",
        },
        {
          type: "list",
          items: [
            "Bubble wrap",
            "Foam",
            "Air cushions",
            "Thermocol where appropriate",
            "Corrugated separators",
            "Edge protection",
            "Strong outer cartons",
          ],
        },
        {
          type: "paragraph",
          text: "The words FRAGILE / HANDLE WITH CARE should be displayed where appropriate.",
        },
        {
          type: "paragraph",
          text: "However, a fragile label does not replace proper protective packaging.",
        },
      ],
    },

    {
      id: "multi-package-shipments",
      number: 10,
      title: "MULTI-PACKAGE SHIPMENTS",

      content: [
        {
          type: "paragraph",
          text: "Multiple cartons or bags belonging to one order should not simply be taped together unless the selected courier/service explicitly permits it.",
        },
        {
          type: "paragraph",
          text: "Where available, merchants should use:",
        },
        {
          type: "list",
          items: [
            "Multi-package shipment functionality, or",
            "Separate AWBs for separate packages.",
          ],
        },
        {
          type: "paragraph",
          text: "Every package must carry the correct AWB/label.",
        },
        {
          type: "paragraph",
          text: "Nexgo/courier partners may not accept claims for packages that are improperly combined, incorrectly labelled or shipped without the required AWB identification.",
        },
      ],
    },

    {
      id: "special-handling-labels",
      number: 11,
      title: "SPECIAL HANDLING LABELS",

      content: [
        {
          type: "paragraph",
          text: "Where applicable, merchants should use suitable handling markings such as:",
        },
        {
          type: "list",
          items: [
            "FRAGILE",
            "THIS SIDE UP",
            "KEEP DRY",
            "HANDLE WITH CARE",
            "LIQUID",
            "DO NOT STACK",
            "OTHER applicable handling instructions",
          ],
        },
        {
          type: "paragraph",
          text: "Handling labels do not guarantee special treatment unless the selected courier service specifically supports such handling.",
        },
      ],
    },

    {
      id: "prohibited-restricted-items",
      number: 12,
      title: "PROHIBITED & RESTRICTED ITEMS",

      content: [
        {
          type: "paragraph",
          text: "Merchants must not use Nexgo to ship products prohibited by applicable law or by the selected courier partner.",
        },
        {
          type: "paragraph",
          text: "Examples may include:",
        },
        {
          type: "list",
          items: [
            "Illegal narcotics",
            "Explosives",
            "Firearms and ammunition",
            "Hazardous materials",
            "Flammable substances",
            "Certain chemicals",
            "Live animals",
            "Human remains",
            "Cash/currency",
            "Certain precious metals or stones",
            "Counterfeit goods",
            "Illegal or stolen goods",
            "Pornographic/indecent material where prohibited by law",
            "Dangerous weapons",
            "Certain batteries and battery-powered products",
            "Items prohibited under applicable aviation/transport regulations",
            "Any inadequately packaged or leaking shipment",
            "Any item prohibited by the selected courier partner",
          ],
        },
        {
          type: "paragraph",
          text: "The prohibited-item list may vary by courier, service type and destination.",
        },
        {
          type: "paragraph",
          text: "Nexgo reserves the right to reject, suspend, return or otherwise handle shipments that violate applicable laws, carrier policies or Nexgo terms.",
        },
      ],
    },

    {
      id: "weight-dimension-sop",
      number: 13,
      title: "WEIGHT & DIMENSION SOP",

      content: [
        {
          type: "paragraph",
          text: "Shipping charges may be calculated using the applicable chargeable weight.",
        },
        {
          type: "paragraph",
          text: "Chargeable weight may be based on the higher of:",
        },

        {
          type: "definition",
          title: "Dead Weight",
          text: "Actual physical weight of the shipment.",
        },

        {
          type: "definition",
          title: "Volumetric Weight",
          text: "Weight calculated from package dimensions.",
        },

        {
          type: "subheading",
          text: "Volumetric Weight",
        },

        {
          type: "paragraph",
          text: "A commonly used formula is:",
        },

        {
          type: "formula",
          text: "Length × Breadth × Height ÷ Applicable Divisor",
        },

        {
          type: "paragraph",
          text: "The applicable divisor may vary according to:",
        },
        {
          type: "list",
          items: [
            "Courier partner",
            "Service type",
            "Air/surface movement",
            "Shipment category",
            "Commercial agreement",
          ],
        },
        {
          type: "paragraph",
          text: "The merchant must enter accurate weight and dimensions while booking the shipment.",
        },
      ],
    },

    {
      id: "weight-discrepancy",
      number: 14,
      title: "WEIGHT DISCREPANCY",

      content: [
        {
          type: "paragraph",
          text: "A weight discrepancy occurs when the courier-recorded weight differs from the weight declared by the merchant.",
        },
        {
          type: "paragraph",
          text: "Nexgo acts as a technology/aggregation platform and the final physical weight may be captured by the carrier.",
        },
        {
          type: "paragraph",
          text: "If a discrepancy is raised, the merchant may be required to provide evidence such as:",
        },
        {
          type: "list",
          items: [
            "Package photographs",
            "Photograph of package on weighing scale",
            "Measurement photographs",
            "Original package dimensions",
            "Product/package video",
            "Invoice",
            "Other supporting evidence requested by Nexgo",
          ],
        },
        {
          type: "subheading",
          text: "Dispute Timeline",
        },
        {
          type: "paragraph",
          text: "Weight disputes must be raised within the applicable dispute window communicated by Nexgo/courier.",
        },
        {
          type: "paragraph",
          text: "If the merchant does not raise a dispute within the applicable period, the courier-recorded weight may be treated as accepted.",
        },
      ],
    },

    {
      id: "shipment-damage",
      number: 15,
      title: "SHIPMENT DAMAGE",

      content: [
        {
          type: "paragraph",
          text: "If a shipment arrives damaged, the merchant/consignee should report the issue as soon as possible.",
        },
        {
          type: "paragraph",
          text: "Evidence may include:",
        },
        {
          type: "list",
          items: [
            "Outer packaging photographs",
            "Inner packaging photographs",
            "Product photographs",
            "Unboxing video",
            "Invoice",
            "AWB",
            "Damage description",
            "Packaging condition photographs",
          ],
        },
        {
          type: "paragraph",
          text: "Claims are subject to the selected courier partner's claim policy and Nexgo's applicable terms.",
        },
        {
          type: "paragraph",
          text: "Poor, insufficient or tampered packaging may result in claim rejection.",
        },
      ],
    },

    {
      id: "lost-shipment",
      number: 16,
      title: "LOST SHIPMENT",

      content: [
        {
          type: "paragraph",
          text: "A shipment may be treated as lost/untraceable after the applicable investigation and carrier-defined TAT.",
        },
        {
          type: "paragraph",
          text: "The investigation may require:",
        },
        {
          type: "list",
          items: [
            "AWB number",
            "Invoice",
            "Product value",
            "Product description",
            "Packaging photographs",
            "KYC information",
            "Other documents required by the courier partner",
          ],
        },
        {
          type: "paragraph",
          text: "Claim settlement, if approved, will be subject to the applicable carrier agreement, service type, declared value, insurance/risk coverage and claim limits.",
        },
        {
          type: "paragraph",
          text: "Nexgo does not guarantee reimbursement of the full invoice value unless the applicable service/claim policy specifically provides for it.",
        },
      ],
    },

    {
      id: "claim-process",
      number: 17,
      title: "CLAIM PROCESS",

      content: [
        {
          type: "paragraph",
          text: "Claims should be raised through the Nexgo support system/panel within the applicable claim period.",
        },
        {
          type: "subheading",
          text: "Claim Types",
        },
        {
          type: "list",
          items: [
            "Lost shipment",
            "Damage",
            "Shortage",
            "Missing item",
            "Delivery dispute",
            "POD dispute",
            "Other carrier-related shipment issues",
          ],
        },
        {
          type: "subheading",
          text: "Required Information",
        },
        {
          type: "list",
          items: [
            "AWB number",
            "Invoice",
            "Product details",
            "Shipment value",
            "Packaging proof",
            "Photos/videos",
            "KYC information",
            "Any other supporting documents",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may forward the claim to the concerned courier partner for investigation.",
        },
        {
          type: "paragraph",
          text: "Final approval and settlement are subject to the applicable courier policy.",
        },
      ],
    },

    {
      id: "proof-of-delivery",
      number: 18,
      title: "PROOF OF DELIVERY – POD",

      content: [
        {
          type: "paragraph",
          text: "POD may be requested for eligible shipments after delivery.",
        },
        {
          type: "paragraph",
          text: "Depending on the courier partner, POD may contain:",
        },
        {
          type: "list",
          items: [
            "Recipient name",
            "Delivery date/time",
            "Delivery status",
            "Signature",
            "OTP verification",
            "Delivery photograph",
            "Digital delivery confirmation",
          ],
        },
        {
          type: "paragraph",
          text: "POD availability and retrieval time may vary by courier partner.",
        },
      ],
    },

    {
      id: "in-transit-shipments",
      number: 19,
      title: "IN-TRANSIT SHIPMENTS",

      content: [
        {
          type: "paragraph",
          text: "Transit time depends on:",
        },
        {
          type: "list",
          items: [
            "Origin",
            "Destination",
            "Courier partner",
            "Service type",
            "Shipment weight",
            "Weather",
            "Operational conditions",
            "Holidays",
            "Natural events",
            "Regulatory restrictions",
            "Network disruptions",
          ],
        },
        {
          type: "paragraph",
          text: "The estimated delivery date shown on the Nexgo platform should be considered an estimated TAT and not an unconditional guarantee unless expressly stated otherwise.",
        },
      ],
    },

    {
      id: "oda-non-serviceable",
      number: 20,
      title: "ODA / NON-SERVICEABLE LOCATIONS",

      content: [
        {
          type: "definition",
          title: "ODA – Out of Delivery Area",
          text: "An ODA location is an area where normal courier delivery may require special handling, additional charges or alternate arrangements.",
        },
        {
          type: "paragraph",
          text: "Possible outcomes include:",
        },
        {
          type: "list",
          items: [
            "Additional ODA charges",
            "Delayed delivery",
            "Branch delivery",
            "Customer self-collection",
            "Alternate delivery arrangement",
          ],
        },
        {
          type: "definition",
          title: "NSZ – Non-Serviceable Zone",
          text: "A Non-Serviceable Zone is a location where the selected courier partner does not provide regular pickup or delivery service.",
        },
        {
          type: "paragraph",
          text: "Serviceability can change based on courier network conditions.",
        },
      ],
    },

    {
      id: "extra-delivery-attempts",
      number: 21,
      title: "EXTRA DELIVERY ATTEMPTS",

      content: [
        {
          type: "paragraph",
          text: "If additional delivery attempts are required beyond the courier's standard attempt policy, additional charges may be applicable.",
        },
        {
          type: "paragraph",
          text: "Such charges will depend on:",
        },
        {
          type: "list",
          items: [
            "Courier partner",
            "Shipment type",
            "Weight slab",
            "Destination",
            "Number of additional attempts",
            "Applicable commercial agreement",
          ],
        },
        {
          type: "paragraph",
          text: "Any applicable charges may be debited from the merchant's Nexgo wallet or account.",
        },
      ],
    },

    {
      id: "cod-remittance",
      number: 22,
      title: "COD REMITTANCE",

      content: [
        {
          type: "paragraph",
          text: "For eligible COD shipments, the courier collects the payment from the consignee.",
        },
        {
          type: "paragraph",
          text: "After successful delivery and collection, the COD amount is processed for settlement according to Nexgo's applicable remittance cycle.",
        },
        {
          type: "subheading",
          text: "COD Conditions",
        },
        {
          type: "list",
          items: [
            "Merchant KYC must be completed.",
            "Correct bank details must be provided.",
            "Bank account should belong to the verified merchant/business where required.",
            "Negative wallet balances or outstanding dues may affect settlement.",
            "Fraud/suspicious activity may result in a temporary settlement hold.",
            "Banking errors caused by incorrect merchant-provided details are the merchant's responsibility.",
          ],
        },
        {
          type: "paragraph",
          text: "The exact COD cycle will be communicated through the Nexgo platform or applicable commercial agreement.",
        },
      ],
    },

    {
      id: "cod-hold",
      number: 23,
      title: "COD HOLD",

      content: [
        {
          type: "paragraph",
          text: "COD remittance may be temporarily held in circumstances including:",
        },
        {
          type: "list",
          items: [
            "Incomplete KYC",
            "KYC mismatch",
            "Incorrect bank details",
            "Negative wallet balance",
            "Outstanding dues",
            "Fraud investigation",
            "Regulatory requirement",
            "Disputed transactions",
            "Other risk/compliance concerns",
          ],
        },
        {
          type: "paragraph",
          text: "Once the relevant issue is resolved, eligible funds may be released according to the applicable settlement process.",
        },
      ],
    },

    {
      id: "wallet-billing",
      number: 24,
      title: "WALLET & BILLING",

      content: [
        {
          type: "paragraph",
          text: "Merchants are responsible for maintaining sufficient balance where prepaid shipping/wallet services are applicable.",
        },
        {
          type: "paragraph",
          text: "Charges may include:",
        },
        {
          type: "list",
          items: [
            "Forward shipping",
            "RTO shipping",
            "COD charges",
            "Additional handling",
            "ODA charges",
            "Weight discrepancy charges",
            "Additional delivery attempt charges",
            "Cancellation charges",
            "Other applicable carrier charges",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may debit applicable charges from the merchant wallet/account.",
        },
        {
          type: "paragraph",
          text: "Carrier billing adjustments may be reflected after the shipment has been processed.",
        },
      ],
    },

    {
      id: "shipment-cancellation",
      number: 25,
      title: "SHIPMENT CANCELLATION",

      content: [
        {
          type: "paragraph",
          text: "A shipment may be cancelled before pickup subject to the applicable courier and Nexgo rules.",
        },
        {
          type: "paragraph",
          text: "Cancellation after pickup or after movement into the courier network may be treated differently and may result in shipping/RTO/handling charges.",
        },
        {
          type: "paragraph",
          text: "Any refund will be processed according to:",
        },
        {
          type: "list",
          items: [
            "Shipment status",
            "Courier billing status",
            "Applicable Nexgo refund policy",
            "Carrier confirmation",
            "Outstanding dues or adjustments",
          ],
        },
      ],
    },

    {
      id: "rto-receiving-sop",
      number: 26,
      title: "RTO RECEIVING SOP",

      content: [
        {
          type: "paragraph",
          text: "Merchants must ensure that their registered pickup/return address remains active and serviceable for receiving RTO shipments.",
        },
        {
          type: "paragraph",
          text: "If an RTO cannot be delivered to the merchant because of:",
        },
        {
          type: "list",
          items: [
            "Incorrect return address",
            "Closed premises",
            "Refusal",
            "Non-availability",
            "Non-serviceable location",
            "Other merchant-related reason",
          ],
        },
        {
          type: "paragraph",
          text: "additional handling or reattempt charges may apply.",
        },
      ],
    },

    {
      id: "customer-support-escalation",
      number: 27,
      title: "CUSTOMER SUPPORT & ESCALATION",

      content: [
        {
          type: "paragraph",
          text: "For any shipment issue, merchants should first raise a ticket through the Nexgo panel/support channel.",
        },
        {
          type: "paragraph",
          text: "The merchant should provide:",
        },
        {
          type: "list",
          items: [
            "AWB number",
            "Registered mobile/email",
            "Issue category",
            "Shipment details",
            "Supporting documents/photos",
          ],
        },

        {
          type: "subheading",
          text: "Suggested Escalation Levels",
        },

        {
          type: "level",
          title: "Level 1 – Customer Support",
          description:
            "General shipment, pickup and tracking issues.",
        },

        {
          type: "level",
          title: "Level 2 – Operations Team",
          description:
            "Pickup failures, transit exceptions, delivery issues and courier escalations.",
        },

        {
          type: "level",
          title: "Level 3 – Claims / Finance Team",
          description:
            "Damage, lost shipment, billing, COD and claim-related matters.",
        },

        {
          type: "level",
          title: "Level 4 – Management Escalation",
          description:
            "Unresolved critical cases after completion of the applicable escalation process.",
        },
      ],
    },

    {
      id: "fraud-misuse",
      number: 28,
      title: "FRAUD & MISUSE",

      content: [
        {
          type: "paragraph",
          text: "Nexgo maintains a zero-tolerance approach toward fraudulent shipping activity.",
        },
        {
          type: "paragraph",
          text: "Examples include:",
        },
        {
          type: "list",
          items: [
            "Fake orders",
            "Fake COD bookings",
            "Incorrect product declarations",
            "Misdeclaration of shipment value",
            "Prohibited products",
            "Manipulation of shipment information",
            "Fraudulent claims",
            "Multiple accounts created to avoid outstanding dues",
            "Abuse of promotional pricing",
            "False weight/dimension declarations",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may suspend or terminate accounts and may take further action where required.",
        },
      ],
    },

    {
      id: "account-suspension",
      number: 29,
      title: "ACCOUNT SUSPENSION",

      content: [
        {
          type: "paragraph",
          text: "Nexgo may restrict or suspend an account in circumstances including:",
        },
        {
          type: "list",
          items: [
            "Non-payment of dues",
            "Fraudulent activity",
            "Prohibited products",
            "Repeated policy violations",
            "Invalid KYC",
            "Regulatory concerns",
            "Abuse of the platform",
            "Excessive disputes or suspicious activity",
            "Violation of Nexgo's Terms & Conditions",
          ],
        },
        {
          type: "paragraph",
          text: "Shipments may be placed on hold where necessary for operational, financial, security or compliance reasons.",
        },
      ],
    },

    {
      id: "merchant-responsibilities",
      number: 30,
      title: "MERCHANT RESPONSIBILITIES",

      content: [
        {
          type: "paragraph",
          text: "The merchant is responsible for:",
        },
        {
          type: "list",
          items: [
            "Accurate shipment information",
            "Correct customer address",
            "Correct mobile number",
            "Correct weight and dimensions",
            "Correct product declaration",
            "Proper packaging",
            "Valid invoice/documentation",
            "Applicable GST/e-way bill compliance",
            "Compliance with prohibited-item rules",
            "Correct bank information",
            "Timely dispute submission",
            "Maintaining sufficient wallet balance",
          ],
        },
      ],
    },

    {
      id: "courier-partner-responsibilities",
      number: 31,
      title: "COURIER PARTNER RESPONSIBILITIES",

      content: [
        {
          type: "paragraph",
          text: "The selected courier partner is responsible for operational execution of the shipment within its applicable service terms, including:",
        },
        {
          type: "list",
          items: [
            "Pickup",
            "Sorting",
            "Transportation",
            "Last-mile delivery",
            "Delivery attempts",
            "RTO movement",
            "Applicable POD",
            "Carrier-side shipment investigation",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo provides the aggregation technology and facilitates communication/escalation with courier partners.",
        },
      ],
    },

    {
      id: "service-tat",
      number: 32,
      title: "SERVICE TAT",

      content: [
        {
          type: "paragraph",
          text: "TAT may vary depending on the shipment and courier partner.",
        },

        {
          type: "paragraph",
          text: "Typical operational stages include:",
        },

        {
          type: "process",
          items: [
            "Pickup",
            "Origin Processing",
            "Transit",
            "Destination Processing",
            "Out for Delivery",
            "Delivered/RTO",
          ],
        },

        {
          type: "paragraph",
          text: "TAT can be affected by:",
        },

        {
          type: "list",
          items: [
            "Sundays/public holidays",
            "Weather",
            "Natural disasters",
            "Strikes",
            "Network congestion",
            "Political/regulatory restrictions",
            "Incorrect address",
            "Customer availability",
            "ODA/NSZ locations",
            "Operational disruptions",
          ],
        },

        {
          type: "paragraph",
          text: "Any TAT displayed on Nexgo should be treated according to the service selected and applicable courier conditions.",
        },
      ],
    },

    {
      id: "important-packaging-checklist",
      number: 33,
      title: "IMPORTANT PACKAGING CHECKLIST",

      content: [
        {
          type: "paragraph",
          text: "Before handing over every package:",
        },
        {
          type: "checklist",
          items: [
            "Product is packed securely.",
            "Correct box/bag is used.",
            "Empty space is properly filled.",
            "Package is properly sealed.",
            "Product cannot move freely inside the package.",
            "Liquid products are leak-proof.",
            "Fragile products have sufficient cushioning.",
            "Shipping label is clearly visible.",
            "Old labels are removed/covered.",
            "Invoice/documents are included where required.",
            "AWB matches the shipment.",
            "Weight and dimensions are correctly entered.",
            "Applicable special handling markings are present.",
          ],
        },
      ],
    },

    {
      id: "important-disclaimer",
      number: 34,
      title: "IMPORTANT DISCLAIMER",

      content: [
        {
          type: "paragraph",
          text: "Nexgo is a courier aggregation and logistics technology platform. Shipment transportation and last-mile execution are performed through third-party courier/logistics partners.",
        },

        {
          type: "paragraph",
          text: "Courier-specific:",
        },

        {
          type: "list",
          items: [
            "Rates",
            "Serviceability",
            "TAT",
            "Weight rules",
            "COD rules",
            "RTO charges",
            "ODA charges",
            "Claim limits",
            "Prohibited-item rules",
            "Packaging requirements",
            "Additional attempt charges",
          ],
        },

        {
          type: "paragraph",
          text: "may vary and can be updated from time to time.",
        },

        {
          type: "paragraph",
          text: "Where a courier partner's operational policy differs from this general SOP, the applicable service-specific/courier-specific terms may apply.",
        },

        {
          type: "paragraph",
          text: "Nexgo reserves the right to modify this SOP, pricing, operational procedures and service conditions from time to time.",
        },
      ],
    },

    {
      id: "nexgo-support",
      number: 35,
      title: "NEXGO SUPPORT",

      content: [
        {
          type: "paragraph",
          text: "For shipment-related assistance, merchants should use the support/contact options available inside the Nexgo dashboard.",
        },

        {
          type: "closing",
          text: "Nexgo – One Platform. Multiple Couriers. Smarter Shipping.",
        },
      ],
    },
  ],

  metadata: {
    version: "1.0",
    effectiveDate: "14 August 2026",
    documentOwner: "Nexgo Operations & Compliance Team",
  },
};