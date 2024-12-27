import { 
  Code2, 
  Cpu, 
  Gamepad2, 
  Github as GithubIcon, 
  Layout, 
  Trello as TrelloIcon, 
  Wrench 
} from 'lucide-react';

export const skills = {
  languages: [
    { name: 'C++', icon: Code2 },
    { name: 'C#', icon: Code2 },
    { name: 'Python', icon: Code2 },
    { name: 'Dart', icon: Code2 },
    { name: 'Lua', icon: Code2 },
  ],
  enginesFrameworks: [
    { name: 'Unity', icon: Gamepad2 },
    { name: 'Unreal 4', icon: Gamepad2 },
    { name: 'Flutter', icon: Layout },
    { name: 'Blender', icon: Cpu },
  ],
  tools: [
    { name: 'Github', icon: GithubIcon },
    { name: 'Trello', icon: TrelloIcon },
  ],
  fields: [
    { name: 'Gameplay', icon: Gamepad2 },
    { name: 'Tools', icon: Wrench },
  ],
};