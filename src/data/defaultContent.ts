import type { SiteContent } from '../types';

export const defaultContent: SiteContent = {
    hero: {
        title: "Sähköasentaja Riihimäki",
        subtitle: "Ammattitaitoinen sähkömies ja sähköasentaja Riihimäellä. Sähköasennukset, ilmalämpöpumput ja sähköautolataus.",
    },
    sections: {
        ev: {
            id: "ev-chargers",
            title: "Sähköautolataus Riihimäki",
            content: "Sähköauton lataukseen tarkoitettu latauspiste on turvallinen valinta. Palvelemme Riihimäkeä ja lähialueita. Latauspiste on palo- ja henkilöturvallinen. Tavallinen pistorasia voi pitkäaikaisessa latauskäytössä vaurioitua tai jopa sulaa. Latauspisteen avulla varmistat, että akku on yön aikana latautunut täyteen."
        },
        ac: {
            id: "air-conditioners",
            title: "Ilmalämpöpumput Riihimäki",
            content: "Ilmalämpöpumpun asennus Riihimäellä ammattitaidolla. Ilmalämpöpumppu on erinomainen tapa säästää lämmityskustannuksissa ja viilentää kotiasi kesähelteillä. Tarjoamme asennukset ja huollot koko Riihimäen alueella. Kotitalouksissa ilmalämpöpumpun huolto kannattaa suorittaa säännöllisesti."
        },
        smartHome: {
            id: "smart-home",
            title: "Sähkötyöt Riihimäki",
            content: "Kaikki sähkötyöt Riihimäellä ja lähialueilla. Sähköasennukset, valaistusratkaisut, saneeraukset ja huollot. Älykoti-automaatioratkaisut ja energiakonsultointi. Autamme sinua optimoimaan energiankulutuksesi ja tekemään asumisesta mukavampaa."
        }
    },
    owners: [
        {
            name: "Omistaja 1",
            role: "Perustaja",
            imagePlaceholder: "owner1"
        },
        {
            name: "Omistaja 2",
            role: "Perustaja",
            imagePlaceholder: "owner2"
        }
    ],
    contactEmail: "joonas.mammela@basicelectric.fi"
};
