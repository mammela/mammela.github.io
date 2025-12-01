import type { SiteContent } from '../types';

export const defaultContent: SiteContent = {
    hero: {
        title: "Sähköasentaja Riihimäki",
        subtitle: "Ammattitaitoinen sähkömies ja sähköasentaja Riihimäellä. Sähköasennukset, ilmalämpöpumput ja sähköautolataus.",
    },
    sections: {
        ev: {
            id: "ev-charging",
            title: "Sähköauton lataus",
            content: "Kartoitamme kiinteistösi sähköverkon kapasiteetin ja asennamme turvalliset latausasemat avaimet käteen -periaatteella. Huomioimme tulevaisuuden tarpeet ja kuormanhallinnan.",
            image: "/placeholder-1.png"
        },
        ac: {
            id: "heat-pumps",
            title: "Ilmalämpöpumput",
            content: "Asennamme ja huollamme ilmalämpöpumput ammattitaidolla. Oikein valittu ja asennettu pumppu säästää energiaa ja lisää asumismukavuutta ympäri vuoden.",
            image: "/placeholder-2.png"
        },
        smartHome: {
            id: "electrical-work",
            title: "Sähkötyöt",
            content: "Teemme kaikki kodin ja kiinteistöjen sähkötyöt luotettavasti. Valaistus, pistorasiat, sähköremontit ja vikakorjaukset hoituvat kokeneelta ammattilaiselta.",
            image: "/placeholder-3.png"
        }
    },
    owners: [
        {
            name: "Jani Lauttanen",
            role: "Toimitusjohtaja",
            email: "jani.lauttanen@basicelectric.fi",
            phone: "050 406 4664",
            address: "S2-urakoitsija",
            imagePlaceholder: "/owner-1.png"
        },
        {
            name: "Joonas Mämmelä",
            role: "Teknologianjohtaja",
            email: "joonas.mammela@basicelectric.fi",
            phone: "040 824 6119",
            address: "S2-urakoitsija",
            imagePlaceholder: "/owner-2.png"
        }
    ],
    contactEmail: "joonas.mammela@basicelectric.fi"
};
