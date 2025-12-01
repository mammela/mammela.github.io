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

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
  };
  sections: {
    ev: SectionContent;
    ac: SectionContent;
    smartHome: SectionContent;
  };
  owners: Owner[];
  contactEmail: string;
}
