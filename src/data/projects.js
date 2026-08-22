import destructiblesGIF from '../assets/projects/Destructibles.gif';

export const projects = {
  en: [
    {
      id: 'droppables',
      title: 'Modular Destructibles System [LVN Gameplay Programming Showcase 22]',
      description:
        'Data-driven destructible objects system with damage, visual feedback, optional debris spawning, and respawn support. Hit by a weapon-driven first-person controller, all behaviour configured through data assets with decoupled hooks for drops, particles, and audio.',
      mediaTag: 'GIF',
      media: destructiblesGIF,
      links: [
        { label: 'Repo [Open Source]', href: 'https://github.com/LukkasVN/LVN-Gameplay-Programming-Showcase/tree/main/22_Modular_Destructibles_System' },
      ],
    },
  ],
  es: [
    {
      id: 'droppables',
      title: 'Sistema Modular de Objetos Destructibles [LVN Gameplay Programming Showcase 22]',
      description:
        'Sistema de objetos destructibles basado en datos, con daños, retroalimentación visual, generación opcional de escombros y compatibilidad con respawn. Golpe recibido a través de un controlador de jugador con su propio "sistema de armas", todo su comportamiento se configura a través de activos de datos con enlaces independientes para objetos recogibles, partículas y audio.',
      mediaTag: 'GIF',
      media: destructiblesGIF,
      links: [
        { label: 'Repo [Open Source]', href: 'https://github.com/LukkasVN/LVN-Gameplay-Programming-Showcase/tree/main/22_Modular_Destructibles_System' },
      ],
    },
  ],
};