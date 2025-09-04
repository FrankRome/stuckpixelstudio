export interface Game {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  status: 'Prototype' | 'Early Access' | 'Released';
  platforms: {
    itch?: string;
    steam?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}