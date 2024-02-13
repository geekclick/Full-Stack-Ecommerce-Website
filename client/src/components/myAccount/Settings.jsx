import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "../ui/switch";

const languages = [
  "Abkhazian",
  "Afar",
  "Afrikaans",
  "Akan",
  "Albanian",
  "Amharic",
  "Arabic",
  "Aragonese",
  "Armenian",
  "Assamese",
  "Avaric",
  "Avestan",
  "Aymara",
  "Azerbaijani",
  "Bambara",
  "Bashkir",
  "Basque",
  "Belarusian",
  "Bengali",
  "Bihari languages",
  "Bislama",
  "Bosnian",
  "Breton",
  "Bulgarian",
  "Burmese",
  "Catalan, Valencian",
  "Chamorro",
  "Chechen",
  "Chichewa, Chewa, Nyanja",
  "Chinese",
  "Chuvash",
  "Cornish",
  "Corsican",
  "Cree",
  "Croatian",
  "Czech",
  "Danish",
  "Divehi, Dhivehi, Maldivian",
  "Dutch, Flemish",
  "Dzongkha",
  "English",
  "Esperanto",
  "Estonian",
  "Ewe",
  "Faroese",
  "Fijian",
  "Finnish",
  "French",
  "Fulah",
  "Galician",
  "Ganda",
  "Georgian",
  "German",
  "Greek (modern)",
  "Guarani",
  "Gujarati",
  "Haitian, Haitian Creole",
  "Hausa",
  "Hebrew",
  "Herero",
  "Hindi",
  "Hiri Motu",
  "Hungarian",
  "Icelandic",
  "Ido",
  "Igbo",
  "Indonesian",
  "Interlingua (International Auxiliary Language Association)",
  "Interlingue",
  "Inuktitut",
  "Inupiaq",
  "Irish",
  "Italian",
  "Japanese",
  "Javanese",
  "Kannada",
  "Kanuri",
  "Kashmiri",
  "Kazakh",
  "Kinyarwanda",
  "Kirghiz, Kyrgyz",
  "Komi",
  "Kongo",
  "Korean",
  "Kurdish",
  "Kwanyama, Kuanyama",
  "Lao",
  "Latin",
  "Latvian",
  "Limburgan, Limburger, Limburgish",
  "Lingala",
  "Lithuanian",
  "Luba-Katanga",
  "Luxembourgish, Letzeburgesch",
  "Macedonian",
  "Malagasy",
  "Malay",
  "Malayalam",
  "Maltese",
  "Manx",
  "Maori",
  "Marathi",
  "Marshallese",
  "Moldovan, Moldavian, Romanian",
  "Mongolian",
  "Nauru",
  "Navajo, Navaho",
  "Northern Ndebele",
  "Nepali",
  "Ndonga",
  "Norwegian",
  "Norwegian Bokmål",
  "Norwegian Nynorsk",
  "Nuosu, Sichuan Yi",
  "Occitan (post 1500)",
  "Ojibwa",
  "Oriya",
  "Oromo",
  "Ossetian, Ossetic",
  "Pali",
  "Panjabi, Punjabi",
  "Pashto, Pushto",
  "Persian",
  "Polish",
  "Portuguese",
  "Quechua",
  "Romansh",
  "Romanian, Moldavian, Moldovan",
  "Russian",
  "Samoan",
  "Sango",
  "Sanskrit",
  "Sardinian",
  "Serbian",
  "Shona",
  "Sindhi",
  "Sinhala, Sinhalese",
  "Slovak",
  "Slovenian",
  "Somali",
  "Sotho, Southern",
  "South Ndebele",
  "Spanish, Castilian",
  "Sundanese",
  "Swahili",
  "Swati",
  "Swedish",
  "Tagalog",
  "Tahitian",
  "Tajik",
  "Tamil",
  "Tatar",
  "Telugu",
  "Thai",
  "Tibetan",
  "Tigrinya",
  "Tonga (Tonga Islands)",
  "Tsonga",
  "Tswana",
  "Turkish",
  "Turkmen",
  "Twi",
  "Uighur, Uyghur",
  "Ukrainian",
  "Urdu",
  "Uzbek",
  "Venda",
  "Vietnamese",
  "Volapük",
  "Walloon",
  "Welsh",
  "Western Frisian",
  "Wolof",
  "Xhosa",
  "Yiddish",
  "Yoruba",
  "Zhuang, Chuang",
  "Zulu",
];

function Settings() {
  return (
    <div className="h-screen flex flex-col gap-12">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-lg">Appearance</h1>
          <p className="text-xs">
            Customize how your theme looks on your device
          </p>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[100px] h-[40px] bg-[#F6F6F6] border-0 outline-none rounded-lg">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-lg">Appearance</h1>
          <p className="text-xs">
            Customize how your theme looks on your device
          </p>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[100px] h-[40px] bg-[#F6F6F6] border-0 outline-none rounded-lg">
              <SelectValue placeholder="Languages" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-lg">Appearance</h1>
          <p className="text-xs">
            Customize how your theme looks on your device
          </p>
        </div>
        <div>
          <Switch className="scale-150 bg-green-500 " />
        </div>
      </div>
    </div>
  );
}

export default Settings;
