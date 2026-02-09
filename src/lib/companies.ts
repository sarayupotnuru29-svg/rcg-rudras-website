import microsoftLogo from "@/assets/companies/microsoftnew.jpeg";
import wiproLogo from "@/assets/companies/wipro.png";

import Ericssionlogo from "@/assets/companies/ericssion.png";

import sonylogo from "@/assets/companies/sonynew.jpeg";
import inivitlogo from "@/assets/companies/inivit.png";
import gartnerlogo from "@/assets/companies/gartner.png";

import adobelogo from "@/assets/companies/adobe.webp";
import ciscologo from "@/assets/companies/Cisco.jpg";
import zslogo from "@/assets/companies/zs.webp";
import EYlogo from "@/assets/companies/EY.png";
import amdocslogo from "@/assets/companies/amdocs.png";

import FAIlogo from "@/assets/companies/FAI.png";
import yokogawalogo from "@/assets/companies/yokogalwa.png";
import societelogo from "@/assets/companies/Societe-Generale-Logo.jpg";
import samsunglogo from "@/assets/companies/samsung.png";
import DHLlogo from "@/assets/companies/DHL.png";
import fedexlogo from "@/assets/companies/fedEx.png";
import infosysLogo from "@/assets/companies/infosys.png";


import hclLogo from "@/assets/companies/hcl.png"; 

import accentureLogo from "@/assets/companies/accenturenew.jpeg";
import cognizantLogo from "@/assets/companies/cognizantnew.jpeg";

import oracleLogo from "@/assets/companies/oraclenew.jpeg";
import techMahindraLogo from "@/assets/companies/technew.jpeg";
import azureLogo from "@/assets/companies/azurenew.jpeg";
import pegaLogo from "@/assets/companies/pega.jpeg";
import daikinLogo from "@/assets/companies/daikin.jpeg";
import broadcomLogo from "@/assets/companies/broadcom.jpeg";
import dolbyLogo from "@/assets/companies/dolby.jpeg";
import NTTdataLogo from "@/assets/companies/nttdata.jpeg";
import NextcloudLogo from "@/assets/companies/nextcloud.jpeg";
import CGILogo from "@/assets/companies/CGI.jpeg";
import NCRLogo from "@/assets/companies/NCR.jpeg";
import CapgeminiLogo from "@/assets/companies/capgemini.jpeg";
import VerizonLogo from "@/assets/companies/verizon.jpeg";
import ATLogo from "@/assets/companies/AT.jpeg";
import DeloitteLogo from "@/assets/companies/deloitte.jpeg";

export interface Company {
  name: string;
  logo: string;
}

export const companies: Company[] = [
 
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Wipro", logo: wiproLogo },
  
  { name: "Ericssion", logo: Ericssionlogo },
  
  { name: "Sony", logo: sonylogo },
  { name: "Inivit", logo: inivitlogo },
  { name: "Gartner", logo: gartnerlogo },
  
  { name: "Adobe", logo: adobelogo },
  { name: "Cisco", logo: ciscologo },
  { name: "ZS", logo: zslogo },
  { name: "EY", logo: EYlogo },
  { name: "Amdocs", logo: amdocslogo },
  
  { name: "FAI", logo: FAIlogo },
  { name: "Yokogawa", logo: yokogawalogo },
  { name: "Societe Generale", logo: societelogo },
  { name: "Samsung", logo: samsunglogo },
  { name: "DHL", logo: DHLlogo },
  { name: "FedEx", logo: fedexlogo },
  { name: "Infosys", logo: infosysLogo },
  { name: "HCL", logo: hclLogo },
  { name: "Tech Mahindra", logo: techMahindraLogo },
  { name: "Accenture", logo: accentureLogo },
  { name: "Cognizant", logo: cognizantLogo },
  
  { name: "Oracle", logo: oracleLogo },
  { name: "Azure", logo: azureLogo },
  { name: "Pega", logo: pegaLogo },
  { name: "Daikin", logo: daikinLogo },
  { name: "Broadcom", logo: broadcomLogo },
  { name: "Dolby", logo: dolbyLogo },
  { name: "NTTData", logo: NTTdataLogo },
  { name: "NextCloud", logo: NextcloudLogo },
  { name: "CGI", logo: CGILogo },
  { name: "NCR", logo: NCRLogo },
  { name: "Capgemini", logo: CapgeminiLogo },
  { name: "Verizon", logo: VerizonLogo },
  { name: "AT", logo: ATLogo },
  { name: "Deloitte", logo: DeloitteLogo },
  
];