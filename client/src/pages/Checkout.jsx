import React, { useRef } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Hero from "@/components/checkout/Hero";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/Layout";

const countryNames = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const inputFields = [
  {
    inputName: "Town / City",
    inputType: "text",
    inputPlaceholder: "",
  },
  {
    inputName: "House No. , Building Name",
    inputType: "text",
    inputPlaceholder: "",
  },
  {
    inputName: "Road name, Area, Colony",
    inputType: "text",
    inputPlaceholder: "",
  },
  {
    inputName: "ZIP code",
    inputType: "number",
    inputPlaceholder: "",
  },
  {
    inputName: "Phone",
    inputType: "number",
    inputPlaceholder: "",
  },
  {
    inputName: "Email",
    inputType: "email",
    inputPlaceholder: "",
  },
  {
    inputName: "",
    inputType: "text",
    inputPlaceholder: "Additional information",
  },
];

function Checkout() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (formRef.current) {
      formRef.current.submit(); // Submit the form
    }
  };

  return (
    <Layout hero={<Hero />}>
      <div className="h-fit w-[608px] bg-[#FFFDE9]">
        <h1 className="font-semibold text-3xl mx-12 relative -top-3">
          Billing details
        </h1>
        <div className="px-16 py-10">
          <form
            ref={formRef}
            action="/payment"
            method="get"
            className="flex flex-col space-y-9"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-6">
                <Label className="text-[16px] font-medium">First Name</Label>
                <Input />
              </div>
              <div className="flex flex-col space-y-5">
                <Label className="text-[16px] font-medium">Last Name</Label>
                <Input />
              </div>
            </div>
            <div className="flex flex-col space-y-5 w-full">
              <Label className="text-[16px] font-medium">
                Company Name (Optional)
              </Label>
              <Input />
            </div>
            <div className="flex flex-col space-y-5 w-full">
              <Label className="text-[16px] font-medium">
                Country / Region
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {countryNames.map((item, index) => {
                    return (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            {inputFields.map((item, index) => {
              return (
                <div key={index} className="flex flex-col space-y-5 w-full">
                  <Label className="text-[16px] font-medium">
                    {item.inputName}
                  </Label>
                  <Input
                    type={item.inputType}
                    placeholder={item.inputPlaceholder}
                  />
                </div>
              );
            })}
          </form>
        </div>
      </div>
      <div className="h-fit w-[508px] bg-[#FFFDE9] px-8 py-10 flex flex-col space-y-10    ">
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-2xl">Product</h1>
            <h1 className="font-semibold text-2xl">Subtotal</h1>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-light text-base flex justify-between w-1/3">
              <span className="uppercase font-normal text-muted-foreground">
                shoes
              </span>
              <span>X 1</span>
            </p>
            <p className="text-base">Rs. 250,000.000</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>Rs. 250,000.000</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total</p>
            <p className="text-[#B88E2F] text-2xl font-bold">Rs. 250,000.000</p>
          </div>
        </div>
        <div>
          <RadioGroup defaultValue="Direct Bank Transfer">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="Direct Bank Transfer"
                id="Direct Bank Transfer"
              />
              <Label htmlFor="Direct Bank Transfer">Direct Bank Transfer</Label>
            </div>
            <p className="font-light text-base m-3">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Cash On Delivery" id="Cash On Delivery" />
              <Label
                htmlFor="Cash On Delivery"
                className=" text-muted-foreground"
              >
                Cash On Delivery
              </Label>
            </div>
          </RadioGroup>
          <p className="my-6">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <b>privacy policy.</b>
          </p>
          <Button
            onClick={handleSubmit}
            className="block m-auto w-1/2 bg-transparent hover:bg-secondary border border-black text-black rounded-lg hover:text-white hover:border-0 h-12 text-lg"
          >
            Place Order
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
