export interface SectionContent {
  id: string;
  title: string;
  content: string;
  image?: string;
}

export interface Owner {
  name: string;
  role: string;
  imagePlaceholder: string;
  phone?: string;
  email?: string;
  address?: string;
}

export interface EVImages {
  hero: string;
  homeCharging: string;
  housingAssociation: string;
}

export interface ElectricalImages {
  hero: string;
  showcase1: string;
  showcase2: string;
  showcase3: string;
}

export interface HeatPumpImages {
  hero: string;
  detail: string;
}

export interface AutomationImages {
  hero: string;
  lighting: string;
  heating: string;
}

export interface ProfessionalsImages {
  hero: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
  };
  sections: {
    ev: SectionContent;
    ac: SectionContent;
    smartHome: SectionContent;
    automation: SectionContent;
  };
  subsites: {
    ev: EVImages;
    electrical: ElectricalImages;
    heatPumps: HeatPumpImages;
    automation: AutomationImages;
    professionals: ProfessionalsImages;
  };
  owners: Owner[];
  contactEmail: string;
}
