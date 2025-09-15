// 

import React from "react";
import Infocard from "./Infocard";
import { Phone, Mail, MapPin } from "lucide-react"; // direct import
import Icons from "../Icons";

const Contactinfo = () => (
  <div className="space-y-8">
    <Infocard
      title="Direct Contact"
      items={[
        { label: "Phone", value: "+231-8811-41733", icon: "Phone" },
        { label: "Email", value: "ramseyhappycooperative2025@gmail.com", icon: "Mail" },
        { label: "Location", value: "Yekepa, Nimba County, Liberia", icon: "MapPin" },
      ]}
    />

    <Infocard
      title="Quick Contact"
      customContent={
        <a
          href="https://wa.me/+231881141733"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors w-full justify-center"
        >
          <Icons.WhatsApp size={20} />
          <span>WhatsApp Us</span>
        </a>
      }
    />

    <Infocard
      title="Business Hours"
      customContent={
        <div className="space-y-2 text-gray-600">
          <p>
            <strong>Mon - Fri:</strong> 8:00 AM - 6:00 PM
          </p>
          <p>
            <strong>Saturday:</strong> 9:00 AM - 4:00 PM
          </p>
          <p>
            <strong>Sunday:</strong> Closed
          </p>
          <p className="text-sm italic mt-2">West Africa Time (GMT)</p>
        </div>
      }
    />
  </div>
);

export default Contactinfo;
