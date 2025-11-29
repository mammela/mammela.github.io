import type { SiteContent } from '../types';

export const defaultContent: SiteContent = {
    hero: {
        title: "BASIC ELECTRIC",
        subtitle: "Sähköalan ammattilainen palveluksessasi",
    },
    sections: {
        ev: {
            id: "ev-chargers",
            title: "Sähköautolataus",
            content: "Sähköauton lataukseen tarkoitettu latauspiste on turvallinen valinta. Se on palo- ja henkilöturvallinen. Tavallinen pistorasia voi pitkäaikaisessa latauskäytössä vaurioitua tai jopa sulaa sekä aiheuttaa henkilövahinkoja. Latauspisteen avulla varmistat, että akku on yön aikana latautunut täyteen."
        },
        ac: {
            id: "air-conditioners",
            title: "Ilmalämpöpumput",
            content: "Ilmalämpöpumppu on erinomainen tapa säästää lämmityskustannuksissa ja viilentää kotiasi kesähelteillä. Tarjoamme asennukset ja huollot ammattitaidolla. Muista, että kotitalouksissa ilmalämpöpumpun huolto kannattaa suorittaa säännöllisesti laitteen toimintakyvyn varmistamiseksi."
        },
        smartHome: {
            id: "smart-home",
            title: "Älykoti & Energiakonsultointi",
            content: "Tuo kotisi nykyaikaan älykkäillä automaatioratkaisuilla. Autamme sinua optimoimaan energiankulutuksesi ja tekemään asumisesta mukavampaa ja ekologisempaa. Kysy lisää energiakonsultoinnista!"
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
