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
    subsites: {
        ev: {
            hero: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
            homeCharging: "https://images.unsplash.com/photo-1621255536412-421429402509?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            housingAssociation: "https://images.unsplash.com/photo-1565514020176-db7933f8206d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        electrical: {
            hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
            showcase1: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            showcase2: "https://images.unsplash.com/photo-1565514020176-db7933f8206d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            showcase3: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        heatPumps: {
            hero: "https://images.unsplash.com/photo-1614631446501-abcf76949734?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
            detail: "https://images.unsplash.com/photo-1558002038-1091a166111c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        automation: {
            hero: "https://images.unsplash.com/photo-1558002038-1091a166111c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
            lighting: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            heating: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        professionals: {
            hero: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
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
