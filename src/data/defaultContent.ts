import type { SiteContent } from '../types';

export const defaultContent: SiteContent = {
    hero: {
        title: "Sähköalan ratkaisut kotiisi ja yritykseesi",
        subtitle: "Nopea apu ja kestävät ratkaisut: sähköasennukset, ilmalämpöpumput ja latausasemat Riihimäellä, Hyvinkäällä ja koko Kanta-Hämeessä.",
    },
    sections: {
        ev: {
            id: "ev-charging",
            title: "Lataa autosi turvallisesti",
            content: "Kartoitamme kiinteistösi sähköverkon kapasiteetin ja asennamme turvalliset latausasemat avaimet käteen -periaatteella. Varmistamme, että lataus on tehokasta ja turvallista.",
            image: "/placeholder-1.png"
        },
        ac: {
            id: "heat-pumps",
            title: "Säästä energiaa ja paranna mukavuutta",
            content: "Oikein valittu ilmalämpöpumppu säästää lämmityskuluissa ja viilentää kesähelteillä. Asennamme ja huollamme laitteet ammattitaidolla, jotta saat parhaan hyödyn.",
            image: "/placeholder-2.png"
        },
        smartHome: {
            id: "electrical-work",
            title: "Kaikki sähkötyöt luotettavasti",
            content: "Tarvitsetko pistorasian asennusta, valaistuksen uusimista tai laajempaa sähköremonttia? Hoidamme pienet ja suuret sähkötyöt huolellisesti ja sovitussa aikataulussa.",
            image: "/placeholder-3.png"
        },
        automation: {
            id: "automation",
            title: "Älykoti ja automaatio",
            content: "Tee kodistasi älykäs Shelly-ratkaisuilla. Säästä energiaa automaattisella valaistuksella ja lämmityksen ohjauksella, paranna turvallisuutta ja hallitse kotiasi etänä – helposti ja kustannustehokkaasti.",
            image: "/placeholder-4.png"
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
            role: "Kehitysjohtaja",
            email: "joonas.mammela@basicelectric.fi",
            phone: "040 824 6119",
            address: "S2-urakoitsija",
            imagePlaceholder: "/owner-2.png"
        }
    ],
    contactEmail: "joonas.mammela@basicelectric.fi"
};
