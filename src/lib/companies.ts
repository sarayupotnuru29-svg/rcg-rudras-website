// Company logos
import googleLogo from "@/assets/companies/google.png";
import amazonLogo from "@/assets/companies/amazon.png";
import microsoftLogo from "@/assets/companies/microsoft.png";
import wiproLogo from "@/assets/companies/wipro.png";
import tcsLogo from "@/assets/companies/tcs.png";
import Ericssionlogo from "@/assets/companies/ericssion.png";
import Saintgobainlogo from "@/assets/companies/saint gobain.png";
import sonylogo from "@/assets/companies/sony.webp";
import inivitlogo from "@/assets/companies/inivit.png";
import gartnerlogo from "@/assets/companies/gartner.png";
import Artificiallogo from "@/assets/companies/artificial_penetration_logo.jpg";
import adobelogo from "@/assets/companies/adobe.webp";
import ciscologo from "@/assets/companies/Cisco.jpg";
import zslogo from "@/assets/companies/zs.webp";
import EYlogo from "@/assets/companies/EY.png";
import amdocslogo from "@/assets/companies/amdocs.png";
import mysigmalogo from "@/assets/companies/Mu_sigma_logo.jpg";
import FAIlogo from "@/assets/companies/FAI.png";
import yokogawalogo from "@/assets/companies/yokogalwa.png";
import societelogo from "@/assets/companies/Societe-Generale-Logo.jpg";
import samsunglogo from "@/assets/companies/samsung.png";
import DHLlogo from "@/assets/companies/DHL.png";
import fedexlogo from "@/assets/companies/fedEx.png";
import infosysLogo from "@/assets/companies/infosys.png";
import hclLogo from "@/assets/companies/hcl.png";
import accentureLogo from "@/assets/companies/accenture.png";
import cognizantLogo from "@/assets/companies/cognizant.png";
import ibmLogo from "@/assets/companies/ibm.png";
import oracleLogo from "@/assets/companies/oracle.png";
import techMahindraLogo from "@/assets/companies/tech-mahindra.png";

export interface Company {
  name: string;
  logo: string;
}

export const companies: Company[] = [
  { name: "Google", logo: googleLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Wipro", logo: wiproLogo },
  { name: "TCS", logo: tcsLogo },
  { name: "Ericssion", logo: Ericssionlogo },
  { name: "SaintGobain", logo: Saintgobainlogo},
  { name: "Sony", logo: sonylogo },
  { name: "Inivit", logo: inivitlogo },
  { name: "Gartner", logo: gartnerlogo },
  { name: "Artificial Penetration", logo: Artificiallogo },
  { name: "adobe", logo: adobelogo },
  { name: "cisco", logo: ciscologo },
  { name: "ZS", logo: zslogo },
  { name: "EY", logo: EYlogo },
  { name: "Amdocs", logo: amdocslogo },
  { name: "my sigma", logo: mysigmalogo },
  { name: "FAI", logo: FAIlogo },
  { name: "Yokogawa", logo: yokogawalogo },
  { name: "Societe generale", logo: societelogo },
  { name: "Samsung", logo: samsunglogo },
  { name: "DHL", logo: DHLlogo },
  { name: "FedEx", logo: fedexlogo },
  { name: "Infosys", logo: infosysLogo },
  { name: "HCL", logo: hclLogo },
  { name: "Tech Mahindra", logo: techMahindraLogo },
  { name: "Accenture", logo: accentureLogo },
  { name: "Cognizant", logo: cognizantLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "Oracle", logo: oracleLogo },
];