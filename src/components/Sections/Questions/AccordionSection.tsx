import Balancer from "react-wrap-balancer";

import { useTranslations } from "next-intl";

import { FundingPlatforms } from "~/components/Common/funding";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export function AccordionSection() {
  const t = useTranslations();

  // Set items according to the "faq"
  // entries in the en-us.json file
  const items = [1, 2, 3] as const;

  type FaqNumber = (typeof items)[number];

  type TranslationKeys =
    | `faq.${FaqNumber}.details`
    | `faq.${FaqNumber}.summary`;

  return (
    <Accordion type="multiple">
      {items.map((item) => {
        const summaryKey = `faq.${item}.summary` as TranslationKeys;
        const detailsKey = `faq.${item}.details` as TranslationKeys;
        const itemId = item;

        return (
          <AccordionItem key={itemId} value={`item-${itemId}`}>
            <AccordionTrigger>
              {item}. {t(summaryKey)}
            </AccordionTrigger>
            <AccordionContent>
              {itemId !== 3 ? (
                <Balancer className="text-gray-500 dark:text-gray-400">
                  <p>{t(detailsKey)}</p>
                </Balancer>
              ) : (
                <Balancer className="text-gray-500 dark:text-gray-400">
                  <p>{t(detailsKey)}</p>
                  <FundingPlatforms />
                </Balancer>
              )}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
