import { iFlavorText } from "../interfaces";

export const getEnDescription = (entries: iFlavorText[]) => {
  let output = "???";
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.language.name == "en") {
      output = entry.flavor_text;
    }
  });
  return output;
};
