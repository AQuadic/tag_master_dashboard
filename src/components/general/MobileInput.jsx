import { getCountryDataList } from "countries-list";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useMemo, useState } from "react";

const MobileInput = ({
  selectedCountry,
  setSelectedCountry,
  phone,
  setPhone,
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const countries = useMemo(() => getCountryDataList(), []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.phone[0].toString().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="relative w-full bg-white h-[50px] mt-3 hover:border-neutral-400 dark:hover:border-neutral-500 flex items-center gap-2.5 p-2 border-2 dark:border-neutral-700 rounded-[8px] focus-within:!border-neutral-700 dark:focus-within:!border-neutral-300">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <img
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry.iso2}.svg`}
        alt={`${selectedCountry} flag`}
        draggable={false}
        width={24}
        height={16}
      />
      <p className="dark:text-neutral-200">+{selectedCountry.phone[0]}</p>
      <div className="bg-[#AAAAAA] w-[1px] h-5  "></div>
      <input
        // placeholder={t("phone")}
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full bg-transparent dark:text-neutral-200 focus:outline-none"
      />
      {isOpen && (
        <div className="flex flex-col gap-2 border shadow-sm p-3 z-30 absolute left-0 top-11 max-h-[200px] min-w-full overflow-y-auto bg-white dark:bg-darkBg dark:text-neutral-200 rounded-[4px]">
          <input
            // placeholder={t("Search country or phone code")}
            variant="bordered"
            classNames={{ inputWrapper: "rounded-[8px]" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredCountries.map((country) => (
            <button
              onClick={() => {
                setSelectedCountry(country);
                setIsOpen(false);
              }}
              type="button"
              key={country.iso2}
              className="flex items-center gap-2"
            >
              <img
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.iso2}.svg`}
                alt={`${country} flag`}
                draggable={false}
                width={24}
                height={16}
              />
              <span>{country.name}</span>
              <span>+{country.phone[0]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default MobileInput;
